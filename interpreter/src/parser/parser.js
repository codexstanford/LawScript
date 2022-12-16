import fs from 'fs';
import path, { parse } from 'path';

import parseFileContentWithGrammar from './grammar.js'
import lexer from './lexer.js'

import flatten from './flatten.js';
import structure from './structure.js';

export default function parseProgramFile(filePath) {

  let ast = parseFile(filePath);

  ast = flatten(ast);

  let program = structure(ast);
  return program;
}

function parseFile(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');

  let matchResult = parseFileContentWithGrammar(fileContent, filePath);

  let ast = lexer(matchResult, fileContent);

  ast = manageImportStm(ast, filePath);

  return ast;
}

function manageImportStm(ast, filePath) {

  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];
    if (item.type == 'import') {

      let importFilePath = `${path.dirname(filePath)}/${item.target}`;
      let fast = parseFile(importFilePath);

      Array.prototype.splice.apply(ast, [i, 1, ...fast]);
    }
    if (item.children) {
      manageImportStm(item.children, filePath);
    }
  }


  return ast;
}
