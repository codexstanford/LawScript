export function programToCode(rules) {
  return rules.map(rule => clauseToCode(rule) + '.').join('\n\n');
}

export function clauseToCode(clause) {
  if (!clause) return "";
  if (Array.isArray(clause) && !clause.length) return "";

  if (Array.isArray(clause) && clause[0] === 'rule') {
    const head = clause[1];
    return clauseToCode(head) + ' :-\n'
      + clause.slice(2).map(subgoal => {
        return '  ' + clauseToCode(subgoal);
      }).join(',\n');
  }

  if (Array.isArray(clause)) {
    return clause[0] + '(' + clause.slice(1).map(clauseToCode).join(', ') + ')';
  }

  if (typeof clause === 'string') {
    return clause;
  }

  return JSON.stringify(clause);
}
