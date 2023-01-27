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

      if (item.children.length == 1 && item.children[0].type == 'instruction') {
        item.children = item.children[0].children;
      }
      else {
        console.warn("Interpreter debug: Not expected arrity");
      }
      ast.splice(i--, 1);
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
export function indexSectionsInProgram(program, sectionIndex, parentPath=null) {
  if (!program.sections) {
    return;
  }
  for (let sectionName in program.sections) {
    sectionIndex[sectionName] = program.sections[sectionName];
    if (parentPath) {
      if (!sectionIndex[`${parentPath}.${sectionName}`]) {
        sectionIndex[`${parentPath}.${sectionName}`] = program.sections[sectionName];  
      }
      indexSectionsInProgram(program.sections[sectionName], sectionIndex, `${parentPath}.${sectionName}`);
    }
    else {
      indexSectionsInProgram(program.sections[sectionName], sectionIndex, sectionName);
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
export function flattenSections(program, sectionIndex) { 

  if (program.instructions) {
    for (let instruction of program.instructions) {
      flattenSectionInInstructions([instruction], sectionIndex, instruction);
    }
  }
  if (program.sections) {
    for (let sectionName in program.sections) {
      flattenSections(program.sections[sectionName], sectionIndex);
    }
  }

}

function flattenSectionInInstructions(ast, sectionIndex, parentInstruction=null) {
  for (let i = 0; i < ast.length; ++i) {
    let item = ast[i];

    if (item.type == 'rule_call') {

      if (sectionIndex[item.name]) {

        let targetSection = sectionIndex[item.name];
        item.type = "logic_block";
        item.isSectionCall = true;
        item.sectionName = item.name;
        delete item.name;
        const newInstructions = collectInstructionsInSection(targetSection);

        if (newInstructions.length > 1) {
          item.children = [
            {
              type: "operation",
              operator: "or",
              children: []
            }
          ];

          item.children[0].children =newInstructions ;

        }
        else if (newInstructions.length == 1) {
          item.children = newInstructions;
        }
       
      }
      else {
        console.warn("calling undeclared rule / section", item.name, parentInstruction);
      }
    }
    
    else if (item.children ) {
      flattenSectionInInstructions(item.children, sectionIndex, parentInstruction);
    }
  }
} 

function collectInstructionsInSection(section) {
  let instructions = [];
  if (section.sections) {
    for (let sectionName in section.sections) {
      instructions = [...instructions, ...collectInstructionsInSection(section.sections[sectionName])];
    }
  }
  if (section.instructions) {
    instructions = [...instructions, section.instructions];
  }
  return instructions;
}