import linkProgram from "./linker.js";

/**
 * Generate a program 'structure' from an AST
 * @param {*} ast
 */
export default function structure(ast) {
  let program = {
    annotations: [],
    chains: {},
    rules: {},
    declarations : {}
  };

  for (let item of ast) {
    if (item.type == 'declaration') {
      delete item.type;
      program.declarations[item.name] = item;
    }
    if (item.type == 'annotation') {
      delete item.type;
      program.annotations.push(item);
    }
    if (item.type === 'Chain') {
      program.chains[item.name] = item;
      delete item.name;
    }
    if (item.type === 'Rule') {
      program.rules[item.name] = item;
      delete item.name;
    }
  }

  for (const chain of Object.values(program.chains)) {
    attachAnnotationToGoodScope(chain);
  }

  for (const rule of Object.values(program.rules)) {
    attachAnnotationToGoodScope(rule);
  }

  linkProgram(program);

  return program;
}

/*
** Remove annotations from the flow and attach them to the good scopes
*/
function attachAnnotationToGoodScope(scope) {

  let attachmentTarget = scope;
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];

    if (item.type == "annotation") {
      scope.children.splice(i--, 1);
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
  for (let i = 0; i < operation.children.length; ++i) {
    let item = operation.children[i];


    if (item.type == "annotation") {
      operation.children.splice(i--, 1);
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


