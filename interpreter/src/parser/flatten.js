/**
 * Flatten a program: aka inline all the Rule/alias calls
 * Note: we use Rule but the good name should be Macro
 * @param {*} ast 
 * @return an ast
 */
export default function flatten(ast) {


  let ruleDictionary = buildRuleDictionary(ast);

  flattenRules(ast, ruleDictionary);

  //flattenNames(ast, findNames(ast));

  let sectionIndex = {
    block: {},
    inPlace: {},
    inPlaceChain: {}
  };
  indexSectionsInAST(ast, sectionIndex);

  flattenSections(ast, sectionIndex, null);


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
    if (item.type == "section") {
      dictionary[item.name] = item;
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
function findNames(ast) {
  let dictionary = {};

  walk(ast, node => {
    if (!node) {
      debugger;
    }
    if (node.type === "alias" || node.type === "declaration") {
      dictionary[node.name] = node.value;
    }
  });

  return dictionary;
}

/**
 * Replace all names in `ast` by the referenced value.
 */
function flattenNames(ast, names) {
  walk(ast, (node, parent, key) => {
    if (node.type === "variable" && names[node.value]) {
      debugger;
      const dealiased = names[node.value];
      parent[key] = dealiased;
      return dealiased;
    }

    return undefined;
  });
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
function indexSectionsInAST(ast, sectionIndex, parentChain=null) {
  for (let i = 0; i < ast.length; i++) {
    let item = ast[i];
 

    if (item.type == "section") {
    
        item.type = "section";
        sectionIndex.inPlace[item.name] = item;
        sectionIndex.inPlaceChain[item.name] = parentChain;
        
    }



    if (item.children) {
      indexSectionsInAST(item.children, sectionIndex, parentChain);
    }
  }

}

/**
 * return all the items of type "type" in a ast
 * @param {} type 
 * @param {*} ast 
 */
function findItem(type, ast, index = []) {
  for (let item of ast) {
    if (item.type == type) {
      index.push(item);
    }
    if (item.children) {
      findItem(type, item.children, index);
    }
  }
  return index;
}

/**
 * Flatten the section call!
 * @param {*} ast 
 * @param {*} sectionIndex 
 */
function flattenSections(ast, sectionIndex, parentChain) {
  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];
    if (item.type == "chain") {
      parentChain = item;
    }
    if (item.type == 'rule_call') {
  
      if (sectionIndex.block[item.name]) {

        /* 
        ** If the section contain "chain"(s)
        ** treat it as a rule call, with all chain in a OR
        */
        if (findItem("chain", sectionIndex.block[item.name]).length) {
          let children = [];
          for (let child of sectionIndex.block[item.name]) {
            if (child.type == "chain") {
              children.push({
                type: "logic_block",
                children: child.children
              });
            }
          }
          // not i-- as I think we don't need to run through the section kids?
          ast.splice(i, 1, {
            type: "operation",
            operator: "or",
            isSectionCall: true,
            sectionName: item.name,
            children : children
          });
        }
        else {
          // should never happen?  
          debugger;

        }
      }
      else if (sectionIndex.inPlace[item.name]) {
        // TODO
        // I choose to not implement inplace section call for now as their spec is not clear
        debugger;
      }
      else {
        console.warn("calling undeclared rule / section", item.name, parentChain);
      }
    }
    
    else if (item.children ) {
      flattenSections(item.children, sectionIndex, parentChain);
    }
  }
} 