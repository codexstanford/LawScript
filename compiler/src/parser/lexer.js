

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

function checkAllChildrenSameProperty(propertyName, list) {
  if (!list || !list.length) {
    return true;
  }
  let defaultValue = list[0][propertyName];
  for (let obj in list) {
    if (obj[propertyName] != defaultValue) {
      return false;
    }
  }
  return true;
}

function findIndexOfChildrenValue(type, propertyName, propertyValue, list) {
  if (!list || !list.length) {
    return [];
  }
  let index = [];
  for (let i = 0; i < list.length; ++i) {
    if (list[i].type == type && list[i][propertyName] === propertyValue) {
      index.push(i);
    }
  }
  return index;
}

function splitChildrenOnPropertyValue(type, propertyName, propertyValue, list) {
  if (!list || !list.length) {
    return [];
  }
  let index = [];
  let current = [];
  for (let i = 0; i < list.length; ++i) {
    if (list[i].type == type && list[i][propertyName] === propertyValue) {
      index.push(current);
      current = [];
    }
    else {
      current.push(list[i]);
    }
  }
  if (current.length) {
    index.push(current);
  }
  return index;
}

function orderOperation(operators, list) {
  if (!operators.length) {
    if (list.length == 1) {
      return list[0];
    }
    return list;
  }
  let operatorIndex = splitChildrenOnPropertyValue("operand", "value", operators[0], list);
      
  if (operatorIndex.length > 1) {
    let nextOperator = operators.slice(1);
    let children = [];
    for (let subOperation of operatorIndex) {
      children.push(orderOperation(nextOperator ,subOperation));
    }

    return {
      type : "operation",
      operator: operators[0],
      children : children
    };
  } else {
    return orderOperation(operators.slice(1), list);
  }
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
 * Calculate the length of sub child match for a given AST, allowing to precisely cut the program string
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
    
      case "assignation":
        if (findChild("property_value", current).value.type === "mathematical_expression") {
          return {
            type: "assignation",
            name: findChild("declaration_name", current).value,
            value:  findChild("property_value", current).value.value
          }
        }
        else {
          return {
            type: "assignation",
            name: findChild("declaration_name", current).value,
            value:  findChild("property_value", current).value
          }
        }

    case "alias":
      if (findChild("property_value", current).value.type === "mathematical_expression") {
        return {
          type: "alias",
          name: findChild("alias_name", current).value,
          value:  findChild("property_value", current).value.value
        }
      }
      else {
        return {
          type: "alias",
          name: findChild("alias_name", current).value,
          value:  findChild("property_value", current).value
        }
      }


    case "alias_name":
      return {
        type: "alias_name",
        value: cst.matchStr
      }

    case "declaration":
      let returnObj = {
        type: "declaration",
        name: findChild("declaration_name", current).value
      }
      

      if (findChild("property_value", current).value.type === "mathematical_expression") {
        returnObj.value =  findChild("property_value", current).value.value
      }
      else {
        returnObj.value = findChild("property_value", current).value
      }

      const metadataChild = findChildren("decorator", current);
      if (metadataChild.length) {
        let metadata = {
        }
        for (let child of metadataChild) {
          metadata[child.name] = child.value;
        }
        returnObj.value.metadata = metadata;
      }
      return returnObj;

    
    case "declaration_name":
      return {
        type: "declaration_name",
        value: cst.matchStr
      }

    // Dictionary <enum_name> { <enumerals> };
    case "enum":
      return {
        type: "enum",
        name: findChild("enum_name", current).value,
        children: findChild("enumerals", current).value
      }

    case "enum_name":
      return {
        type: "enum_name",
        value: cst.matchStr
      }
    
    case "enumerals":
      return {
        type: "enumerals",
        value: findChildren("enumeral", current)
      }

    case "enumeral":
      return {
        type: "enumeral",
        name: findChild("enumeral_name", current).value,
        properties: findChild("enumeral_properties", current).properties
      }

    case "enumeral_name":
      return {
        type: "enumeral_name",
        value: cst.matchStr
      }

    case "enumeral_properties":
      return {
        type: "enumeral_properties",
        properties: findChild("object", current).properties
      }

    // rule = "Rule" blank rule_name blank "()" blank "{" blank rule_content blank "}"
    case "rule": 
      let ctnr = findChildren("instruction", current);
      if (!Array.isArray(ctnr)) {
        ctnr = [ctnr];
      }
      return {
        type: findChild("rule_type", current).value.toLowerCase(),
        name: findChild("rule_name", current).value,
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

    case "section_content":
      return {
        type: "section_content",
        children : removeFlatMe(current)
      }

    case "chain":
      return {
        type: "chain",
        children: current
      }
    
    case "instruction_operation":  
      // if all same operator
      if (checkAllChildrenSameProperty("value", findChildren("operand", current))) {
        return {
          type: "operation",
          operator: findChildren("operand", current)[0].value,
          children: removeChildren("operand", current)
        };
      }
      // else build a good map
      // operator priority
      const instructionOperatorPriority = [
        "causal",
        "time",
        "or",
        "and"
      ]
      
      let res = orderOperation(instructionOperatorPriority, current);
      return res;
   

    case "causal_operator": 
      return {
        type: "operand",
        value: "causal"
      }
     
    case "time_operator": 
      return {
        type: "operand",
        value: "time_before"
      }

    case "time_point_operator": 
      return {
        type: "operand",
        value: "time_on"
      }

    case "operation_causal":
      return {
        type: "operation",
        operator: "causal",
        children: current
      }


    
    case "situation_base_not": {
      return {
        type: "operation",
        operator: "not",
        children: current
      } 
    }
    //  logic_block = "(" blank rule_content blank")"
    case "logic_block":
      let ctn = findChild("rule_content", current);
      if (!ctn || !ctn.length) {
        ctn = findChild("instruction", current);
      }
      ctn = ctn.children;
      if (!Array.isArray(ctn)) {
        ctn = [ctn]
      }
      return {
        type: "logic_block",
        children: ctn
      }

    case "section":
        const sessionChildren = findChildren("section_content", current);
        let ctnSection = [];
        for (let child of sessionChildren) {

          if (child.children && !Array.isArray(child.children)) {
            ctnSection.push(child.children);
          }
          else {
           ctnSection = [...ctnSection, ...child.children];
          }
        }
        return {
          type: "section",
          name: findChild("section_name", current).value,
          children: ctnSection
        }

    case "section_name":
      return {
        type: "section_name",
        value: cst.matchStr
      }

    case "section_content":

    case "instruction":
        return {
         type: "instruction",
         children: current
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
      const metadataChildProperty = findChildren("decorator", current);
   
      let returnObjProperty = {
        type: "property",
        key: findChild("property_name", current).value 
      }
 
   
      if (findChild("property_value", current).value.type === "mathematical_expression") {
        returnObjProperty.value = findChild("property_value", current).value.value;
      }
      else {
        returnObjProperty.value = findChild("property_value", current).value;
      }     
 
      if (metadataChildProperty.length) {
        let metadata = {
        }
        for (let child of metadataChildProperty) {
          metadata[child.name] = child.value;
        }
        returnObjProperty.value.metadata = metadata;
      }
      return returnObjProperty;

    case "range_short_notation": 
 
     let operator = findChild("operator", current).value;
     if (operator == "strictly_bigger") {
      return {
        type: "range",
        from : findChild("mathematical_expression", current).value,
        to: "infinity",
        strictBoundFrom : true,
        strictBoundTo : false
      }
     }
     if (operator == "bigger") {
      return {
        type: "range",
        from : findChild("mathematical_expression", current).value,
        to: "infinity",
        strictBoundFrom : false,
        strictBoundTo : false
      }
     }
     if (operator == "lower") {
      return {
        type: "range",
        from : "negativeInfinity",
        to: findChild("mathematical_expression", current).value,
        strictBoundFrom : false,
        strictBoundTo : false
      }
     }
     if (operator == "strictly_lower") {
      return {
        type: "range",
        from : "negativeInfinity",
        to: findChild("mathematical_expression", current).value,
        strictBoundFrom : true,
        strictBoundTo : false
      }
     }
     console.warn(`Unsuported operator in short range notation: ${operator}`)
     return;

    case "range_dot_notation": 
     debugger;
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
    


    case "variable":
      let returnObject = {
        type: "variable",
        name: findChild("variable_name", current).value
      };
      const unit = findChild("unit", current);
      if (unit) {
        returnObject.unit = unit;
      }
      return returnObject;

    case "variable_name":
      return {
        type: "variable_name",
        value: cst.matchStr
      }

    case "type":
      return {
        type: "as_type",
        dimension: findChild("dimension_name", current).value,
        name: findChild("type_name", current).value
      }
  
    case "dimension_name":
      return {
        type: "dimension_name",
        value: cst.matchStr
      }
    
    case "type_name":
        return {
          type: "type_name",
          value: cst.matchStr
        }
  

    case "property_object": 
      return{
        type: "object",
        properties: findChild("block_content", current)?.properties || {}
      }

    case "decorator": 
      return{
        type: "decorator",
        value: findChild("decorator_value", current).value,
        name: findChild("decorator_name", current).value
      }
    
    case "decorator_name":
      return {
        type: "decorator_name",
        value: current[0]
      }
 
    case "decorator_value": 
      return {
        type: "decorator_value",
        value: current[0].value
      }
    
    case "annotation": 
      if (findChild("annotation_negation", current)) {
        return{
          type: "annotation",
          name: findChild("block", current).name,
          properties: findChild("block", current).properties,
          isNegative: true
        }
      }
   
      if (findChild("block", current)) {
        return{
          type: "annotation",
          name: findChild("block", current).name,
          properties: findChild("block", current).properties,
        }
      }
      // annotaiton no {}
      
        return{
          type: "annotation",
          name: findChild("block_name", current).value,
          properties: {}
        }
  
      
    case "annotation_negation":
      return{
        type: "annotation_negation"
      }
    
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

    case "unit":
      if (findChild("variable_name", current)) {
  
        return {
          type: "unit",
          value: findChild("variable_name", current).value
        }
      }
      return

    case "number":
      let typeObj = {};
      if (findChild("unit", current)) {
        typeObj.unit = findChild("unit", current).value
      }
      if (findChild("operation", current)) {
        return {...findChild("operation", current), ...typeObj};
      }
      if (findChild("operation_logic_block", current)) {
        return {... findChild("operation_logic_block", current), ...typeObj};
      }
      return {
        type: "number",
        value: findChild("number_value", current).value,
        ...typeObj
      }

    case "number_value":
      return {
        type: "number_value",
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

    case "mathematical_expression_no_test":
    case "mathematical_expression":
      return {
        type: "mathematical_expression",
        value: current[0]
      }

    case "mathematical_expression_unary_operation_no_test":
    case "mathematical_expression_unary_operation":
      return {
        type: "operation",
        operator: findChild("operator", current).value,
        arity: 1,
        children : [findChildren("mathematical_expression", current)[0].value]
      }
    
      
     
    case "mathematical_expression_test":
      return {
        type: "operation",
        operator: "test",
        test: findChild("mathematical_expression_test_condition", current).value.value,
        true: findChild("mathematical_expression_test_if_true", current).value.value,
        false : findChild("mathematical_expression_test_if_false", current).value.value
      }

    case "mathematical_expression_test_condition": 
      return {
        type: "mathematical_expression_test_condition",
        value: findChild("mathematical_expression", current)
      } 

    case "mathematical_expression_test_if_true": 
      return {
        type: "mathematical_expression_test_if_true",
        value: findChild("mathematical_expression", current)
      } 

    case "mathematical_expression_test_if_false": 
      return {
        type: "mathematical_expression_test_if_false",
        value: findChild("mathematical_expression", current)
      } 
    
    case "mathematical_expression_operation_no_test": 
    case "mathematical_expression_operation": 
      return {
        type: "operation",
        operator: findChild("operator", current).value,
        arity: 2,
        children: [
          findChildren("mathematical_expression", current)[0].value,
          findChildren("mathematical_expression", current)[1].value
        ]
      }

    case "mathematical_expression_unary_operator":
      return current[0]

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

    case "mathematical_expression_operator_not":
       return {
        type: "operator",
        value: "not"
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


    case "mathematical_expression_operator_or": 
    return {
      type: "operator",
      value: "or"
    }

    case "mathematical_expression_operator_and": 
      return {
        type: "operator",
        value: "and"
      }

    case "mathematical_expression_operator_strictly_bigger": 
      return {
        type: "operator",
        value: "strictly_bigger"
      }

    case "mathematical_expression_operator_bigger": 
      return {
        type: "operator",
        value: "bigger"
      }

    case "mathematical_expression_operator_strictly_lower": 
      return {
        type: "operator",
        value: "strictly_lower"
      }

    case "mathematical_expression_operator_lower": 
      return {
        type: "operator",
        value: "lower"
      }

    
    case "mathematical_expression_operator_equal": 
      return {
        type: "operator",
        value: "equal"
      }

    case "mathematical_expression_operator_different": 
      return {
        type: "operator",
        value: "different"
      }

    case "word":
      return current.join("");

    case "word_or_num":
      return cst.matchStr;
    
    case "blank":
    case "chain_operator":
    case "spaceoreol":
    case "eol":
    case "space":
    case "comment":
    case "any":
    case "alnum":
    case "letter":
    case "range":
    case "lower":
    case "upper":
    case "spaces":
    case "digit":
    case "instruction_operator":
    case "instruction_operation_next":
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
    case "real_number":
    case "enumeral_sub":
    case "range_operators":
    case "chain":
    case "chain_item":
    case "instruction_content":
    case "chain_operation_operand":
    case "chain_causal":
    case "chain_item_causal_next":
    case "instruction_operator_next":
    case "situation_base":
    case "expression_flat_b":
    case "sub_variable":
    case "block_content_sub":
    case "extend_list":
    case "not":
    case "word_no_dot":
    case "rule_call_reference":
    case "rule_call_traditional":
    case "statement":
    case "program_content":
    case "program":
    case undefined:
      break;
    default:
      console.warn(`unmatch expression ${cst.ruleName}.`);
  }

  if (current.length) {
    return current;
  }

  return null;
}

