

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
 * Create a new array without the item of type type from an existing list
 * @param {*} type 
 * @param {*} list 
 */
function removeChildren(type, list) {
  const newList = [];
  for (let i = 0; i< list.length; ++i) {
    const item = list[i];
    if (item.type != type) {
      newList.push(item);
    }
  }
  return newList;
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
      let ctnr = findChild("rule_content", current).children;
      if (!Array.isArray(ctnr)) {
        ctnr = [ctnr];
      }
      return {
        type: findChild("rule_type", current).value.toLowerCase(),
        name: findChild("rule_name", current).value,
        childrenType: "content",
        children: ctnr
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
    
    case "rule_content":
      return {
        type: "rule_content",
        children : removeFlatMe(current)
      }

    case "chain":
      return {
        type: "chain",
        children: current
      }

    case "operation_or":
      return {
        type: "operation",
        operator: "or",
        children: removeChildren("operand", current),
        childrenType: "operand"
      };

    case "operation_causal":
      return {
        type: "operation",
        operator: "causal",
        children: current,
        childrenType: "operand"
      }
    
    case "situation_base_not": {
      return {
        type: "operation",
        operator: "not",
        children: current,
        childrenType: "operand"
      } 
    }
    //  logic_block = "(" blank rule_content blank")"
    case "logic_block":
      let ctn = findChild("rule_content", current).children;
     if (!Array.isArray(ctn)) {
       ctn = [ctn]
     }
      return {
        type: "logic_block",
        children: ctn,
        childrenType: "content"
      }

    case "wildcard":
      return {
        type: "any"
      }

    // block = block_name blank "{" blank block_content? blank "}"
    case "block":
      if (findChild("block_operator", current)) {
        return {
          type: "block",
          chainOperator: findChild("block_operator", current),
          name: findChild("block_name", current).value,
          properties: (findChild("block_content", current))? findChild("block_content", current).properties : false
        }
      }

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

    case "range": 
      /*
        Note: Maybe in the future we want to return : To infinity in a { type : "infinity"}
      */
      return {
        type: "range",
        from : (findChild("range_from", current))? findChild("range_from", current).value : "negativeInfinity",
        to: (findChild("range_to", current))? findChild("range_to", current).value : "infinity",
        strictBoundFrom : (findChild("range_equals_min", current))? true : false,
        strictBoundTo : (findChild("range_equals_max", current))? true : false
      }
    
    case "range_from": {
      return {
        type: "range_from",
        value: (current.length == 1)? current[0] : current
      }
    }

    case "range_equals_min": {
      return {
        type: "range_equals_min",
        value: true
      }
    }

    case "range_equals_max": {
      return {
        type: "range_equals_max"
      }
    }
    case "range_to": {
      return {
        type: "range_to",
        value: (current.length == 1)? current[0] : current
      }
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
      return current;
    
    case "property_list_following_items":
      return current;

    case "list_item": 
      return current;
    

    case "expression":

      return {
        type: "expression",  
        // or is hardcoded as a default operator
        operator: findChild("operand", current).value || "or",
        children: removeChildren("operand", current),
        childrenType: "operand"
      }
     
    case "expression_operand": 
      break;

    case "expression_not_value": 
      return {
       type: "expression",
       operator: "not",
       children: current,
       childrenType: "operand"
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
    
    case "expression_value":
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

      if (findChild("mathematical_operation", current)) {
        return findChild("mathematical_operation", current);
      }
      if (findChild("operation_logic_block", current)) {
        return findChild("operation_logic_block", current);
      }
      return {
        type: "number",
        value: cst.matchStr
      }

 

    case "or": 
      return {
        type: "operand",
        value: "or"
      }

    case "and": 
      return {
        type: "operand",
        value: "and"
      }
    
    case "mathematical_expression_block":
      return {
        type: "operation_logic_block",
        children: current
      }


    case "mathematical_expression":
      return current[0];


    case "mathematical_expression_operation": 
      return {
        type: "mathematical_operation",
        operator: findChild("operator", current),
        leftOperand: findChildren("mathematical_expression_operand", current)[0].value,
        rightOperand: findChildren("mathematical_expression_operand", current)[1].value
      }

    case "mathematical_expression_operand": 
      return {
        type: "mathematical_expression_operand",
        value: current[0]
      }

    case "mathematical_expression_operator":
      return current[0];

    case "mathematical_expression_operator_add": 
      return {
        type: "operator",
        value: "add"
      }

    case "mathematical_expression_operator_multiply": 
      return {
        type: "operator",
        value: "multiply"
      }

    case "mathematical_expression_operator_divide": 
      return {
        type: "operator",
        value: "divide"
      }

    case "mathematical_expression_operator_percentOf": 
      return {
        type: "operator",
        value: "percentOf"
      }

    case "mathematical_expression_operator_exponent": 
      return {
        type: "operator",
        value: "exponent"
      }

    case "mathematical_expression_operator_substract":   
      return {
        type: "operator",
        value: "subtract"
      }

    case "block_operator": {
        return current
      }
    // Experimental
    case "block_operator_previous": {
      return {
        type : "block_operator",
        operator: "previous"
      }
    }


    case "word":
      return current.join("");
    
    case "blank":
    case "spaceoreol":
    case "eol":
    case "space":
    case "comment":
    case "any":
    case "alnum":
    case "letter":
    case "lower":
    case "upper":
    case "spaces":
    case "digit":
    case "or": 
    case "causal_operator":
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
    case "situation":
    case "situation_or":
    case "situation_or_next":
    case "situation_causal":
    case "situation_causal_next":
    case "situation_base":
    case "expression_flat_b":
    case "sub_variable":
    case "block_content_sub":
    case "expression_sub":
    case "extend_list":
    case "not":
    case "program":
    case undefined:
      break;
    default:
      console.log(`unmatch expression ${cst.ruleName}.`);
  }

  if (current.length) {
    return current;
  }

  return null;
}

