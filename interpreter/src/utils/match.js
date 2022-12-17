const MATCH = "MATCH";
const MISMATCH = "NOTMATCH";
const PARTIAL_MATCH = "PARTIALMATCH";

/**
 * Match a query against a program and return annotations.
 * @param {*} progam 
 * @param {*} query
 * 
 * @return {
 *  inProgram: true | false,
 *  ambiguous: true | false,
 *  annotations : [],
 *  searchSpace: {}
 * }
 */
export default function match(program, query) {
  let matchResult = {
    inProgram: true,
    ambiguous : true,
    annotations : [...program.annotations],
    searchSpace : {}
  }

  for (let chain of Object.values(program.chains)) {
    runMatch(chain, query);
  }


  // run through the chain to find the first 'match'
  function runMatch(fragment, query) {
    
    if (fragment.children) {
      for (let item of fragment.children) {
        let matchResult = runMatch(item, query);
        if (matchResult.match === "MATCH") {

        } 
      }
    }
    else {
      //does the first item of the query match?

      let matchResult = itemMatch(fragment, query[0]);
      if (!matchResult) {
        console.log("Unhandled fragment", fragment);
      }
      return matchResult;
    }

  }


}



function itemMatch(item, queryItem) {
    

  // wildCard query always match 
  if (queryItem.wildcard) {
    return {match: MATCH};
  }

  if (item.type == "block") {

    // does the item and query type match
    if (!queryItem[item.name]) {
      return {match: MISMATCH}
    }

    let deltaStack = [];
    for (let testKey in queryItem[item.name]) {
      // Property do not exist -> Mismatch
      if (!item.properties[testKey]) {
        return {match: MISMATCH}
      }
      const matchResult = propertyValueMatch(item.properties[testKey], queryItem[item.name][testKey]);
      if (matchResult.match === MISMATCH) {
        return {match: MISMATCH};
      }
        
      // If propertyValueMatch can return MISMATCH we should handle it here
    }

    // We have a match, is it partial (run throug non defined in query obj keys)
    let matchValue = {
      match: MATCH
    }
    for (let propertyName in item.properties) {
      if (item.properties[propertyName] != queryItem[item.name][propertyName]) {
        matchValue.match == PARTIAL_MATCH;
        if (! matchValue.delta) {
          matchValue.delta = {};
          matchValue.delta[item.name] = {}
        }
        matchValue.delta[item.name][propertyName] = item.properties[propertyName];
      }
    }

    return matchValue;
  }

}

function propertyValueMatch(propertyValue, queryValue) {

  if (propertyValue.type == "enumValue") {
    return (`${propertyValue.enumName}.${propertyValue.value}` == queryValue)? { match: MATCH} : { match: MISMATCH };
  }

  if (propertyValue.type == "string") {
    return (propertyValue.value == queryValue)? { match: MATCH} : { match: MISMATCH };
  }

  if (propertyValue.type == "expression") {

    if (propertyValue.operator == "or") {

      for (let item of propertyValue.children) {
        const subResult = propertyValueMatch(item, queryValue);
        if (subResult.match == MATCH) {
          return subResult;
        }
      }
      return {match: MISMATCH}
    }


  }
  console.warn("[MISIMPLEMENTATION MATCH] UNHANDLE PROPERTY VALUE", propertyValue); 
 
  return { match: MISMATCH};
}