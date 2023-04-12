import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';


import parseFileContentWithGrammar from './grammar.js'
import lexer from './lexer.js'

import flatten from './flatten.js';
import structure from './structure.js';

export default async function parseProgramFile(filePath) {

  let ast = await parseFile(filePath);

  ast = flatten(ast);

  let program = structure(ast);
  return program;
}

async function parseFile(filePath, parent=null) {

  let fileContent = '';

  if (filePath.indexOf('http://') == 0 || filePath.indexOf('https://') == 0) {
    try {
      const response = await fetch(filePath);
      fileContent = await response.text();
    }
    catch (e) {
      console.error("Import over WEB error");
      throw(e);
    }
  }
  else {
    if (parent) {
      filePath = `${parent}/${filePath}`;
    }
    fileContent = fs.readFileSync(filePath, 'utf8');
  }

  if (filePath.indexOf('.csv') != -1) {
    return parseCSVFile(fileContent, filePath);
  } 
  let matchResult = parseFileContentWithGrammar(fileContent, filePath);

  let ast = lexer(matchResult, fileContent);

  ast = await manageImportStm(ast, filePath);

  return ast;
}

async function manageImportStm(ast, filePath) {

  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];
    if (item.type == 'import') {

      let importFilePath = `${item.target}`;
      let fast = await parseFile(importFilePath, path.dirname(filePath));

      Array.prototype.splice.apply(ast, [i, 1, ...fast]);
    }
    if (item.children) {
      await manageImportStm(item.children, filePath);
    }
  }


  return ast;
}


function parseCSVFile(fileContent, filePath) {

  let csvContent = Papa.parse(fileContent);
  
  if (csvContent.data.length < 2) {
    console.warn(`Empty CSV file: ${filePath}`);
  }
  const headers = csvContent.data[0];
  const primaryKey = (headers.indexOf('primaryKey') != -1)? 'primaryKey' : headers[0];

  let enumObject = {
    type: "enum",
    name: filePath.split('/').pop().replace('.csv', '').split('?')[0],
    children: []
  };

  for (let i = 1; i < csvContent.data.length; ++i) {
    let enumerable = {
        "type": "enumeral",
        "properties": {
         
        }
      };
    
      for (let j = 0; j < headers.length; ++j) {

        if (headers[j] != primaryKey) {
          enumerable.properties[headers[j]] = {
            type : (typeof csvContent.data[i][j] == "string")? "string" : "number",
            value: (typeof csvContent.data[i][j] == "string")? csvContent.data[i][j].trim() : csvContent.data[i][j],
          };
        }
        else { 
          enumerable.name =  csvContent.data[i][j];
        }

      }
      enumObject.children.push(enumerable);

  }

  return [enumObject];
}