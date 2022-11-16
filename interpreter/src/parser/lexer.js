

/**
 * No really a lexer anymore :) need refactor
 * Generate a JSON usable AST of the program using the match grammar by ohm and the program string.
 * 
 * @param {*} matchResult 
 * @param {*} program 
 */
export default function lexer(matchResult, program) {
  let cst = matchResult._cst
  cst.matchStr = program;
  let res = evaluate(cst);
  return res;  
}


/**
 * Find in a list of AST node the child / children of type type
 * @param {*} type 
 * @param {*} list 
 * @returns either a single node or a list of node if multiple node are found
 */
function findChild(type, list) {
  let ret = [];
  for (let item of list) {
    if (item.type == type) {
      if (item.children && item.children.length == 1) {
        item.children = item.children[0];
      }
      ret.push(item);
    }
  }

  if (ret.length == 0) {
    return null;
  }
  if (ret.length ==  1) {
    return ret[0];
  }

  return ret;

}

/**
 *  Find in a list of AST node children of type type. Always return a list
 * @param {*} type 
 * @param {*} list 
 */
function findChildren(type, list) {
  let ret = [];
  for (let item of list) {
    if (item.type == type) {
      if (item.children && item.children.length == 1) {
        item.children = item.children[0];
      }
      ret.push(item);
    }
  }

  return ret;

}

/**
 * Recursively remove all item of type 'flat_me' from an AST and replace them by their children (reducing the depth of the ast)
 * Note: 'flat_me' is a placeholder type that is set while applying the semantics
 * @param {*} list 
 */
function removeFlatMe(list) {
  let flat_list = [];
  for (let item of list) {
    if (item.children) {
      item.children = removeFlatMe(item.children);
    }
    if (item.type == "flat_me") {
      flat_list = [...flat_list, ...item.children];
    }
    else {
      flat_list.push(item);
    }
  }
  return flat_list;
}

/**
 * Calculate the lenght of sub child match for a given AST, allowing to precisely cut the program string
 * @param {} cst 
 */
function calculateOptMFromChildren(cst) {
  let matchLength = 0;
  if (cst.children) {
    for (let i = 0 ; i < cst.children.length; ++i) {
      let child = cst.children[i];
      if (child.optional === false) {
        child.matchLength = calculateOptMFromChildren(child);
      }
      matchLength += child.matchLength;
    }
  }
  return matchLength;
}


/**
 * Recustively evaluate the CST to generate an AST
 * @param {} cst 
 */
function evaluate(cst) {
  let current = [];


  if (cst.children) {
    let offset = 0;
    for (let i = 0 ; i < cst.children.length; ++i) {
      let child = cst.children[i];
      if (child.optional === false) {
        child.matchLength = calculateOptMFromChildren(child);
      }
      child.matchStr = cst.matchStr.substr(offset, child.matchLength);
  

      offset += child.matchLength;
    
      let res = evaluate(child);
      if (Array.isArray(res)) {
        current = [...current, ...res]
      }
      else if (res) {
        current.push(res);
      }
    }
  }

  switch (cst.ruleName) {
    case "import_stm":
      return {
        type: "import",
        target: findChild("string", current).value
      }
    break;
    
  
    // declaration = declaration_type blank declaration_name blank ";"
    case "declaration": 

      let named = findChild("declaration_name", current);
      if (named) {
        return {
          type: "declaration",
          class: findChild("declaration_type", current).value,
          name: findChild("declaration_name", current).value
        };
      }
      else {
        let dec = {
          type: "declaration",
          class: findChild("declaration_type", current).value,
          name: findChild("block", current).name,
          properties: findChild("block", current).properties
        }
        if (findChild("block", current).extends) {
          dec.extends = findChild("block", current).extends;
        }
        return dec;
      }
    
    
    case "declaration_type": 
      return {
        type: "declaration_type",
        value: cst.matchStr
      }
    
    case "declaration_name":
      return {
        type: "declaration_name",
        value: cst.matchStr
      }
    
    // rule = "Rule" blank rule_name blank "()" blank "{" blank rule_content blank "}"
    case "rule": 
      return {
        type: findChild("rule_type", current).value,
        name: findChild("rule_name", current).value,
        content: findChild("rule_content", current).children,
        
      }

    case "rule_type":
      return {
        type: "rule_type",
        value: cst.matchStr
      }
      
    case "rule_name":
      return {
        type: "rule_name",
        value: cst.matchStr
      }
    
    //  rule_content = annotation* blank (rule_call | block | logic_block) (blank (causal_operator | or) blank annotation* (rule_call | block | logic_block))*
    case "rule_content":
      return {
        type: "rule_content",
        children : removeFlatMe(current)
      }

    case "rule_content_flat_a":
        return {
          type: "flat_me",
          children : current
        }

    case "rule_content_flat_b":
      return {
        type: "flat_me",
        children : current
      }

    case "rule_content_flat_c":
      return {
        type: "flat_me",
        children : current
      }

    //   rule_content_operator = causal_operator | or
    case "rule_content_operator":
      return {
        type: current[0].type
      }

    //  logic_block = "(" blank rule_content blank")"
    case "logic_block":
      return {
        type: "logic_block",
        content : findChild("rule_content", current).children
      }
    
    

    case "causal_operator":
      return {
        type: "causal_operator",
      }
    
    case "wildcard": 
      return {
        type: "any",
        content : []
      }


    case "or":
      return {
        type: "or_operator",
      }
    

    // block = block_name blank "{" blank block_content? blank "}"
    case "block":

      return {
        type: "block",
        name: findChild("block_name", current).value,
        properties: (findChild("block_content", current))? findChild("block_content", current).properties : false
      }
    
    case "block_declaration":
      let returnValue = {
        type: "block",
        name: findChild("block_name", current).value,
        properties: (findChild("block_content", current))? findChild("block_content", current).properties : false
      }
      let bExtend = findChild("block_extends", current);
      if(bExtend) {
        returnValue.extends = bExtend.value;
      }
      return returnValue;
    
    case "block_extends":
      return {
        type: "block_extends",
        value: cst.matchStr
      }
    case "block_name":
      return {
        type: "block_name",
        value: cst.matchStr
      }
    
    // block_content = property (blank "," blank property)*
    case "block_content":
      let properties = findChildren("property", current) ;
      let propObj = {};
      for (let property of properties) {
        propObj[property.key] = property.value;
      }
      return {
        type: "block_content",
        properties: propObj
      }
    
    //  property = property_name blank ":" blank property_value 
    case "property":
      return {
        type: "property",
        key: findChild("property_name", current).value,
        value:  findChild("property_value", current).value
      }

    case "property_name": 
      return {
        type: "property_name",
        value: cst.matchStr
      }

    case "property_value":
      return {
        type: "property_value",
        value: (current.length == 1)? current[0] : current
      }
    

    case "property_list":
      return current
    

    case "list_item": 
      return current
    

    case "expression":

      return {
        type: "expression",
        children: current
      }
    

    case "variable":
 
      return {
        type: "variable",
        value: cst.matchStr
      }
    
    case "property_object": 
      return{
        type: "object",
        properties: findChild("block_content", current).properties
      }



    case "annotation": 


      return{
        type: "annotation",
        name: findChild("block", current).name,
        properties: findChild("block", current).properties
      }
    
    case "value":
      return current;
    
    case "rule_call": 
      return {
        type: "rule_call",
        name: findChild("rule_name", current).value
      }

    //   string = "\"" string_content "\""
    case "string": 
      return {
        type: "string",
        value :  findChild("string_content", current).value
      }
    
    case "string_content": 
      return {
        type: "string_content",
        value: cst.matchStr
      }

    case "number":
      return {
        type: "number",
        value: cst.matchStr
      }
    
    case "word":
      return current.join("");
    
    case "blank":
    case "spaceoreol":    
    case "eol":
    case "space":
    case "comment":
    case undefined:
    case "any":
    case "alnum":
    case "letter":
    case "lower":
    case "upper":        
    case "spaces":
    case "digit":  
    case "comment_content":
    case "comment_block":
    case "comment_open":
    case "comment_close":
    case "comment_line":
    case "comment_inline":
    case "comment_inline_signal":
    case "number_beforedot":
    case "number_afterdot":
    case "number_traditional_notation":
    case "expression_flat_b":
    case "sub_variable":
    case "block_content_sub":
    case "expression_sub":
    case "extend_list":
    case "program":
      break;
    default:
      console.log(`unmatch expression ${cst.ruleName}.`);
  }


  if (current.length) {
    return current;
  }
  return null;
}

