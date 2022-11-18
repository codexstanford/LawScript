
/**
 * Flatten a program: aka inline all the Rule call
 * Note: we use Rule but the good name should be Macro
 * @param {*} ast 
 * @return an ast
 */
export default function flatten(ast) {
  let ruleDictionary = buildRuleDictionary(ast);

  flattenContent(ast, ruleDictionary);

  return ast;
}

/**
 * Index all rule in an ast
 * @param {*} ast 
 * @return a rule hasmap
 */
function buildRuleDictionary(ast) {
  let dictionary = {};
  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];
    if (item.type == "Rule") {
      item.type = "logic_block"
      dictionary[item.name] = item;

      ast.splice(i--, 1);
    }


  }
  return dictionary;
}

/**
 * Replace all rule call in an AST by the content of the rule.
 * @param {*} ast 
 * @param {*} ruleDictionary 
 */
function flattenContent(ast, ruleDictionary) {
  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];
    if (item.type == 'rule_call') {
      ast.splice(i, 1, ruleDictionary[item.name]);
    }

    if (item.content ) {
      flattenContent(item.content, ruleDictionary);
    }


    if (item.operands ) {
      flattenContent(item.operands, ruleDictionary);
    }
  }
}


