import * as epilog from '@epilog/epilog';

/**
 * @param program A parsed and structured IPDL program.
 * @returns {string} Epilog code corresponding to `program`.
 */
export function ipdlToEpilog(program) {
  return folToEpilog(ipdlToFol(program));
}

/**
 * @param program A parsed and structured IPDL program.
 * @returns {Array} First-order logic clauses corresponding to `program`.
 */
function ipdlToFol(program) {
  const clauses = [];

  program.chains.forEach((chain, chainIndex) => {
    clauses.push(['chain', `chain${chainIndex}`]);
  });

  return clauses;
}

/**
 * @param {Array} clauses First-order logic clauses.
 * @returns {string} Epilog code corresponding to `clauses`.
 */
function folToEpilog(clauses) {
  return clauses.map(epilog.grind).join('\n');
}
