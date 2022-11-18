



/**
 * Match a query against a program and return annotations.
 * @param {*} progam 
 * @param {*} query {
 *  chain :[],
 *  actors: {
 *    actorID: {}
 *  }
 * }
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

  for (let chain of program.chains) {
    let matchResult = findHead(chain, query);
  }
}

function findHead(chain, query) {


  if (chain.type == "chain" || chain.type == "logic_block") {
    // chain content is always 1?
    if (chain.content.length) {
      findHead(chain.content[0], query);
    }
    else {
      findHead(chain.content, query);
    }
  }

  if (chain.type == "operation" && chain.operator == "causal") {
    for (let item of chain.operands) {
      findHead(item, query);
    }
  }

  if (chain.type == "operation" && chain.operator == "or") {
    for (let item of chain.operands) {
      findHead(item, query);
    }
  }

  if (chain.type == "block") {
  
    let mResult = doesBlockMatch(chain, query[0]); 
    console.log("MATCH:", chain, query[0], mResult);
    if (mResult.canMatch) {
      debugger;
    }
  }
}


function doesBlockMatch(blockSource, blockQuery) {
  let returnObject = {
    canMatch: true,
    match: true,
    delta: {},
    why: []
  }

  // match the  wildcard!
  if (blockSource.type == "any" || blockQuery.type == "any") {
    return returnObject;
  }

  // Different Named block do not match
  if (blockQuery.name !== blockSource.name) {
    return {
      canMatch: false,
      match: false,
      delta: {},
      why: [{
        type: "block_not_same_name",
        blocks: [blockQuery, blockSource]
      }]
    }
  }

  // see what key matches
  for (let key in blockSource.properties) {

    if (!blockQuery.properties[key]) {
      returnObject.delta[key] = getPossibleValues(blockSource.properties[key]);
      returnObject.match = false;
      returnObject.why.push({
        type: "key_missing_in_query",
        key: key,
        blocks: [blockQuery, blockSource]
      });
      continue;
    }

    if (blockQuery.properties[key].type != blockSource.properties[key].type) {
      // What should we do?
      returnObject.canMatch = false;
      returnObject.match = false;
      returnObject.why.push({
        type: "key_type_no_match",
        key: key,
        blocks: [blockQuery, blockSource]
      })
      continue;
    }

    if (!doesValueMatch(blockQuery.properties[key], blockSource.properties[key])) {
      returnObject.canMatch = false;
      returnObject.match = false;
      returnObject.why.push({
        type: "value_not_match",
        key: key,
        blocks: [blockQuery, blockSource]
      });
      continue;
    }

  }

  return returnObject;
}

/**
 * Try to find all possible values of an item
 * @param {*} item 
 */
function getPossibleValues(item) {
  if (item.type == "expression") {
    // TODO: handle the negative expression here
  
    return item.children;
  }
  return [item];
}

/**
 * Check if value match between 2 item of the same type
 */
function doesValueMatch(itemQ, itemS) {

    if (itemQ.value == itemS.value) {
      return true;
    }

    return false;
}