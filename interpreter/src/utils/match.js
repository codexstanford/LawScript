



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
