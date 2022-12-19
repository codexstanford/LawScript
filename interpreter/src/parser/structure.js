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
  let sectionIndex = handleSectionsInAST(ast);
  for (let item of ast) {
    if (item.type == 'declaration') {
      delete item.type;
      program.declarations[item.name] = item;
    }
    if (item.type == 'annotation') {
      delete item.type;
      program.annotations.push(item); 
    }
    if (item.type === 'chain') {
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
  //  removeLogicBlock(chain);
  }

  for (const rule of Object.values(program.rules)) {
    attachAnnotationToGoodScope(rule);
  }

  for (const chain of Object.values(program.chains)) {
    simplifyBlockPropertiesOperation(chain);
  }


  linkProgram(program, null);

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

    if (!item) {
       debugger;
    }
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
  for (let i = 0; i < operation.children.length; ++i) {
    let operand = operation.children[i];
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


/**
 * Run through the AST
 * For every session node, replace it by it's child tagged with the session name.
 * Build a session dictionary that is annotation sanitized.
 * 
 * [Spec to be implemented]
 * ## Why is it not in flatten?
 * When calling a Section (referencing it), you are actually modifying the code of the section itself.
 * 
 * ```
 * @Section1 {
 *  ::A1
 *  A --> B --> C
 * }
 * 
 *  ::A2
 *  Section1() && D 
 *  
 *  ::A3
 *  Section1() --> E
 * 
 *  ::A4
 *  F --> Section1()
 * ```
 * 
 * === Can be reduced to ==>
 * ```
 *  (A --> B --> C) ::A1
 *  || ((A --> B --> C) && D) ::A2
 *  || ((A --> B --> C) --> E) ::A3
 *  || (F --> (A --> B --> C)) ::A4
 * ```
 * 
 * ## What happen with nested section?
 * 
 * ```
 * @Section1 {
 *  ::A1
 *  A --> 
 *  (
 *    @Part1 {
 *      B
 *    } 
 *    ||
 *    @Part2 {
 *      C
 *    }
 *  )
 *  --> D;
 *  
 *  // As this is inside @Section1, we do not need to specify @Section1.Part1.
 *  // We first look if the variable exist in the current scope. 
 *  // If not we move one scope up and repeat the operation until the root
 *  E --> @Part1 ::A2
 *  
 * }
 * 
 * 
 * F && @Section1.Part2 ::A3
 * 
 * ```
 * 
 * Can be reduce to 
 * 
 * ```
 *  (A --> B || C --> D) ::A1
 *  || (E --> (A --> (E --> B) ::A2 || C --> D))
 *  || (A --> B || (F && C) ::A3 --> D) 
 * 
 * ```
 */
function handleSectionsInAST(ast, sectionName) {
  let sectionIndex = {}

  for (let i = 0; i < ast.length; i++) {
    let item = ast[i];
 
    if (sectionName) {
      item.section = sectionName;
    }
    if (item.type == "section") {
      sectionIndex = {...sectionIndex, ...handleSectionsInAST(item.children, item.name)};
      sectionIndex[item.name] = item.children;

      Array.prototype.splice.apply(ast, [i--, 1, ...item.children]);
    }
    else if (item.children) {
      sectionIndex = {...sectionIndex, ...handleSectionsInAST(item.children)};
    }
  }

  return sectionIndex;
}

