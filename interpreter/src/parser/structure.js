
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
  let unStructuredChains = [];
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



function structureChain(unstructuredChain) {
  let chain = {
    annotations: [],
    chain: []
  }
  let annotationBuffer = [];
  let chainBuffer = [];
  let annotationParent = chain;
  debugger;
  for (let item of unstructuredChain.content) {
    switch (item.type) {
      case "annotation":
        if (!annotationParent) {
          annotationBuffer.push(item);
          // error
          console.error("Non right-hand annotation found:", item);
          break;
        }
        if (!annotationParent.annotations) {
          annotationParent.annotations = [];
        }
        annotationParent.annotations.push(item);
      break;
            
      case "any":
        annotationParent = item;
        chainBuffer.push(item);
      break;
      case "block":
        annotationParent = item;
        chainBuffer.push(item);
      break;
      case "logic_block":
        let subChain = structureChain(item);
        chainBuffer.push(subChain);
        annotationParent = subChain;
      break;
      case "operation":
        chain.chain.push(chainBuffer);
        chainBuffer = [];
        // Not right hand annotation, may prevent some bug, we may need to raise an error instead
        annotationParent = undefined;
      break;
    }

  
  }
  chain.chain.push(chainBuffer);
  return chain;
}