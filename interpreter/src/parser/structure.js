
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
      delete item.type;
      unStructuredChains.push(item);
    }
  }


  for (let item of unStructuredChains) {
    program.chains.push(structureChain(item));
  }

  return program;
}


function structureChain(unstructuredChain) {
  let chain = {
    annotations: [],
    chain: []
  }
  let annotationBuffer = [];
  let chainBuffer = [];
  let annotationParent = chain;

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
      
      case "block":
        annotationParent = item;
        chainBuffer.push(item);
      break;
      case "or_operator":
      break;
      case "logic_block":
        let subChain = structureChain(item);
        chainBuffer.push(subChain);
        annotationParent = subChain;
      break;
      case "causal_operator":
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