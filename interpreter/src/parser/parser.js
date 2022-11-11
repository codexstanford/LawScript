import parseFileContentWithGrammar from './grammar.js'
import lexer from './lexer.js'
import flatten from './flatten.js';
import structure from './structure.js';

export default function parseProgramFile(fileContent) {


  let matchResult = parseFileContentWithGrammar(fileContent);

  let ast = lexer(matchResult, fileContent);
  //console.log(JSON.stringify(ast, null, 2));

  ast = flatten(ast);

  // console.log(JSON.stringify(ast, null, 2));

  let program = structure(ast);
  
  console.log(JSON.stringify(program, null, 2));
  debugger;
  return program;
}