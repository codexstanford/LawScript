



/**
 * Match a query against a program and return annotations.
 * @param {*} progam 
 * @param {*} query {
 *  key : value,
 *  key : [values] // an or 
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

  
}