const MATCH = "MATCH";
const MISMATCH = "MISMATCH";
const PARTIAL_MATCH = "PARTIALMATCH";

/**
 * @param {*} program Parsed IPDL program
 * @param {*} query An array of situations, ordered first cause to last effect
 * 
 * @returns {*} A tree of matches mirroring the structure of `program`
 */
export default function matchTree(program, query) {
  return matchSection(program, query);
}

function matchSection(section, query) {
  const instructions = [];
  for (const instruction of Object.values(section.instructions || [])) {
    instructions.push(matchInstruction(instruction, query));
  }
  
  const sections = {};
  for (const [name, subsection] of Object.entries(section.sections || {})) {
    sections[name] = matchSection(subsection, query);
  }

  return { instructions, sections };
}

function matchInstruction(instruction, query) {
  // wildcard queries always match 
  if (query.wildcard) {
    return { match: MATCH, reason: 'wildcard' };
  }

  if (instruction.type === 'logic_block' || instruction.type === 'instruction') {
    const children = instruction.children.map(i => matchInstruction(i, query));
    return {
      match: children.every(c => c.match === MATCH) ? MATCH : MISMATCH,
      children
    };
  }

  if (instruction.operator === 'causal') {
    if (!query.length) return {
      match: MISMATCH,
      reason: 'causal-not-array'
    };

    const children = [];
    for (let i = 0; i < instruction.children.length; i++) {
      // TODO this isn't right
      if (i >= query.length) return { match: PARTIAL_MATCH, children };
      children.push(matchInstruction(instruction.children[i], query[i]));
    }

    return {
      match: children.every(c => c.match === MATCH) ? MATCH : MISMATCH,
      children
    };
  }

  if (instruction.type === 'block' || instruction.type === 'object') {
    if (!query.properties) return {
      match: MISMATCH,
      reason: 'object-no-properties'
    };

    const properties = {};
    for (const [name, pattern] of Object.entries(instruction.properties)) {
      if (!query.properties[name]) {
        properties[name] = {
          match: MISMATCH,
          reason: 'missing-property'
        };
      } else {
        properties[name] = matchInstruction(pattern, query.properties[name]);
      }
    }

    const match = Object.values(properties).every(p => p.match === MATCH);

    return {
      match: match ? MATCH : MISMATCH,
      properties
    };
  }

  if (instruction.type === 'string') {
    if (query === instruction.value) return { match: MATCH };
    return {
      match: MISMATCH,
      reason: 'string-mismatch',
      expected: instruction.value,
      actual: query
    };
  }

  if (instruction.type === 'variable') {
    // TODO
    return { match: MATCH };
  }

  if (instruction.operator === 'and') {
    const children = instruction.children.map(i => matchInstruction(i, query));
    return {
      match: children.every(r => r.match === MATCH) ? MATCH : MISMATCH,
      children
    };
  }

  if (instruction.operator === 'or') {
    const children = instruction.children.map(i => matchInstruction(i, query));
    return {
      match: children.some(r => r.match === MATCH) ? MATCH : MISMATCH,
      children
    };
  }

  if (Array.isArray(instruction)) {
    if (!Array.isArray(query)) return {
      match: MISMATCH,
      reason: 'non-array'
    };

    const children = [];
    for (let i = 0; i < instruction.length; i++) {
      if (i >= query.length) return {
        match: MISMATCH,
        reason: 'array-too-short',
        children
      };
      children.push(matchInstruction(instruction[i], query[i]));
    }

    return {
      match: children.every(r => r.match === MATCH) ? MATCH : MISMATCH,
      children
    };
  }

  throw new Error(`Unknown instruction type: ${JSON.stringify(instruction)}`);
}