/**
 * Flatten a program: aka inline all the Rule/alias calls
 * Note: we use Rule but the good name should be Macro
 * @param {*} ast 
 * @return an ast
 */
export default function flatten(ast) {
  let ruleDictionary = buildRuleDictionary(ast);
  
  

  flattenRules(ast, ruleDictionary);
  flattenAliases(ast, findAliases(ast));

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
function flattenRules(ast, ruleDictionary) {

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
      flattenRules(item.children, ruleDictionary);
    }
  }
}

/**
 * Visit each node in `ast` (depth-first, pre-order).
 * @param fn {Function} will be called for each node until `ast` is exhausted.
 * Takes the current node, its parent, and its key in that parent as parameters.
 * `fn` can use the latter two to modify `ast` during the walk. If `fn` returns
 * a value, that value will be walked in place of the node `fn` was originally
 * passed.
 */
function walk(ast, fn, parent, parentKey) {
  let node = ast;
  const result = fn(ast, parent, parentKey);
  if (result !== undefined) node = result;

  // if node is an array, walk its children
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      walk(node[i], fn, node, i);
    }
  } else {
    // if node is an object, walk its properties
    if (node === Object(node)) {
      Object.entries(node).forEach(([key, val]) => {
        walk(val, fn, node, key);
      });
    }
  }
}

/**
 * Index all aliases in `ast`
 * @return a map of alias names to values
 */
function findAliases(ast) {
  let dictionary = {};

  walk(ast, node => {
    if (node.type == "alias") {
      dictionary[node.name] = node.value;
    }
  });

  return dictionary;
}

/**
 * Replace all aliases in `ast` by the aliased value.
 */
function flattenAliases(ast, aliases) {
  walk(ast, (node, parent, key) => {
    if (node.type == "variable" && aliases[node.value]) {
      const dealiased = aliases[node.value];
      parent[key] = dealiased;
      return dealiased;
    }

    return undefined;
  });
}
