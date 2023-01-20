import {indexSectionsInProgram, flattenSections} from "./flatten.js"

/**
 * Generate a program 'structure' from an AST
 * @param {*} ast
 */
export default function structure(ast) {
 

 
  // parse the root of the ast to find declaration and annotations
  let program = reorderASTToMatchProgramStructure(ast);

  deleteRulesInAST(ast, program);

  let sectionIndex = {

  };
  indexSectionsInProgram(program, sectionIndex);

  flattenSections(program, sectionIndex, null);

  return program;
}


function reorderASTToMatchProgramStructure(ast) {
  let program = {

  };

  for (let item of ast) {

    if (item.type == 'declaration') {

      if (!program.declarations) {
        program.declarations = {};
      }
      program.declarations[item.name] = item.value;
    }
    if (item.type == "enum") {
      if (!program.declarations) {
        program.declarations = {};
      }
      program.declarations[item.name] = {
        type: "enum",
        properties: {

        }
      };

      for (let child of item.children) {
        program.declarations[item.name].properties[child.name] = child.properties;
      }

      delete item.name;
    }

    if (item.type == 'annotation') {
      delete item.type;
      if (!program.annotations) {
        program.annotations = [];
      }
      program.annotations.push(item); 
    }
    if (item.type == "instruction") {
      if (!program.instructions) {
        program.instructions = [];
      }
      if (item.children.length) {
        program.instructions.push(structureInstruction(item.children));
      }
    }
    if (item.type == "section") {
      if (!program.sections) {
        program.sections = {};
      }
      program.sections[item.name]=reorderASTToMatchProgramStructure(item.children);
    }

  }

  return program;
}

function structureInstruction(ast) {
  let annotations = [];
  let target = null;
  for (let item of ast) {
    if (item.type == "annotation") { 
      delete item.type;
      annotations.push(item);
    }
    else {
      if (target) {
        // we should never be in this case
        console.error("malformated instruction", JSON.stringify(node, null, 2));
        debugger;
      }
      target = item;
    }
  }

  if (annotations.length) {
    target.annotations = annotations;
  }
  if (!target) { 
    debugger;
  }
  if (target.children) {
    handleAnnotationInNode(target);
  }

  return target;
}


function handleAnnotationInNode(node) {

  let lastNode = node;
  let children = [];
  for (let item of node.children) {

    if (item.type == "annotation") {
      if (!lastNode.annotations) {
        lastNode.annotations = [];
      }

      lastNode.annotations.push(item); 
      delete item.type;
    }
    else {
      children.push(item);
      lastNode = item;
      if (item.children) {
        handleAnnotationInNode(item);
      }
    }
  }

  node.children = children;

}
/**
 * Run the ast to find rules, and chain
 * @param {*} ast 
 * @param {*} program 
 */
function deleteRulesInAST(ast, program) {

  for (let item of ast) {
    if (item.type === 'rule') {
      program.rules[item.name] = item;
      delete item.name;
    }

    if (item.children) {
      deleteRulesInAST(item.children, program);
    }
  }
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

// logic block is a parsing artefact and always have only one child
function removeLogicBlock(scope) {
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];
    // sanity check; check there is only on child
    if (item.type == "logic_block" && item.children.length == 1) {
      // Annotations
      if (item.annotations && item.annotations.length) {
        item.children[0].annotations = [...item.children[0].annotations || [], ...item.annotations];
      }
      scope.children[i] = item.children[0];
      item = scope.children[i];
    }

    if (item.children) {
      removeLogicBlock(item);
    }
    
  }
}



// try to find all properties Operation and simplify them
//
// Simplification 1:
// - Reorder the operands / sub operands so that they respect the operation priority :
// a + b * c => b * c + a
//
// Simplification 2:
// - if an operand  is of the same type of the current operation, and it is permited by the current operator, move the operand up and increase current operator arity
//
function simplifyBlockPropertiesOperation(scope) {
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];
   
    if (item.type == "block") {
      for (let propertyName in item.properties) {
        if (item.properties[propertyName].type == "operation") {
  //        reorderOperationToMatchPriority(item.properties[propertyName]);
            groupSimilarOperator(item.properties[propertyName])  
        }
      }
    }
    if (item.children) {
      simplifyBlockPropertiesOperation(item);
    }
    
  }
}


const OPERATOR_PRIORITY_GROUPS = [
  ["not"],
  ["percentOf"]
  ["and", "or"],
  ["multiply", "divide", "exponent"],
  ["add", "subtract"]
];

function reorderOperationToMatchPriority(operation) {



}

const aggregativeOperator = ["and", "or"];
function groupSimilarOperator(operation) {
  if (operation.children[0].value == "contract") {debugger}
  for (let i = 0; i < operation.children.length; ++i) {
    let operand = operation.children[i];
    if (operand.value == "contract") {
      debugger;
    }
    if (aggregativeOperator.indexOf(operation.operator) != -1 && operand.operator == operation.operator) {

      Array.prototype.splice.apply(operation.children, [i--, 1, ...operand.children]);
    } else {
      if (operand.type == "operation") {
        groupSimilarOperator(operand);
      }
    }
  }

  operation.arity = operation.children.length;
}
