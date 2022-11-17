



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
    let matchResult = matchChain(chain, query);
  }
}

function matchChain(chain, query) {

  
}


/**
 * Check if an individual situation match
 * @return 
 * {
 *  // is a match possible
    canMatch: true,
    // is it a match
    match: true,
    // what are the key that are not match and possible match values
    delta: []
  }
 */

 /**
  * 
  * @param blockSource
  *     { "type": "block",
          "name": "Situation",
          "properties": {
            "event": {
              "type": "expression",
              "children": [
                {
                  "type": "variable",
                  "value": "Event.Loss"
                },
                {
                  "type": "variable",
                  "value": "Event.Theft"
                }
              ]
            },
            "relation": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "variable",
                  "value": "Relation.HappenTo"
                },
                "target": {
                  "type": "variable",
                  "value": "InsuredMarquee"
                }
              }
            }
          }
      }  
  * @param {*} blockQuery 
  */
function doesBlockMatch(blockSource, blockQuery) {
  let returnObject = {
    canMatch: true,
    match: true,
    delta: {}
  }
  // Different Named block do not match
  if (blockQuery.name !== blockSource.name) {
    return {
      canMatch: false,
      match: false,
      delta: {}
    }
  }

  // see what key matches
  for (let key of blockSource.properties) {
    if (!blockQuery[key]) {
      returnObject.delta[key] = getPossibleValues(blockSource[key]);
      match = false;
    }



  }
}

function getPossibleValues(item) {

  if (item.type == "expression") {
    return item.children;
  }
  return [item];
}