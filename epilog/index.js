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
    const chainName = `chain${chainIndex}`;

    clauses.push(['chain', chainName]);

    chain.annotations.forEach((annotation, annIndex) => {
      const annotationName = `${chainName}_annotation${annIndex}`;

      clauses.push(['annotation', chainName, `"${annotation.name}"`, annotationName]);

      Object.entries(annotation.properties).forEach(([key, rawVal]) => {
        let val = rawVal.value;
        if (rawVal.type === 'string') {
          val = JSON.stringify(rawVal.value);
        }
        clauses.push(['prop', annotationName, `"${key}"`, val]);
      });
    });
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
