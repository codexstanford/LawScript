
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
    if (item.type == "rule") {
      item.type = "logic_block"
      dictionary[item.name] = item;

      ast.splice(i--, 1);
    }  
    else if (item.type == "chain") {
      let copyItem = {...item};
      copyItem.isChainCall = item.name;
      copyItem.type = "logic_block";
      dictionary[copyItem.name] = copyItem;
    }
    if (item.children) {
      dictionary = {...dictionary, ...buildRuleDictionary(item.children)};
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
      if (ruleDictionary[item.name]) {
        ast.splice(i--, 1, ruleDictionary[item.name]);
      }
      else {
        console.warn("calling undeclared rule", item.name);
      }
    }
    else if (item.children ) {
      flattenContent(item.children, ruleDictionary);
    }
  }
}




