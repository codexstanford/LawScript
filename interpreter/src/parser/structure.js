import linkProgram from "./linker.js";

/**
 * Generate a program 'structure' from an AST
 * @param {*} ast 
 */
export default function structure(ast) {

  let program = {
    declarations : {

    },
    annotations: [],
    chains: []
  }
  for (let item of ast) {
    if (item.type == 'declaration') {
      delete item.type;
      program.declarations[item.name] = item;
    }
    if (item.type == 'annotation') {
      delete item.type;
      program.annotations.push(item);
    }
    if (item.type == 'Chain') {
      item.type = 'chain';
      program.chains.push(item);
    }
  }

  for (let chain of program.chains) {
    attachAnnotationToGoodScope(chain);
  }

  linkProgram(program);
  return program;
}

/*
** Remove annotations from the flow and attach them to the good scopes
*/
function attachAnnotationToGoodScope(scope) {

  let attachmentTarget = scope;
  for (let i = 0; scope.content && i < scope.content.length; ++i) {
    let item = scope.content[i];

    if (item.type == "annotation") {
      scope.content.splice(i--, 1);
      if (!attachmentTarget.annotations) {
        attachmentTarget.annotations = [];
      }
      attachmentTarget.annotations.push(item);
      continue;
    }
    if (item.type == "logic_block") {
      attachAnnotationToGoodScope(item);
    }

    if (item.type == "operation") {
      attachAnnotationToLeftHand(item);
    }
  }
}

function attachAnnotationToLeftHand(operation) {

  let attachmentTarget = operation;
  for (let i = 0; i < operation.operands.length; ++i) {
    let item = operation.operands[i];


    if (item.type == "annotation") {
      operation.operands.splice(i--, 1);
      if (!attachmentTarget.annotations) {
        attachmentTarget.annotations = [];
      }
      attachmentTarget.annotations.push(item);
      continue;
    }

    if (item.type == "operation") {
      attachAnnotationToLeftHand(item);
    }

    if (item.type == "logic_block") {
      attachAnnotationToGoodScope(item);
    }

    attachmentTarget = item;
  }
}


