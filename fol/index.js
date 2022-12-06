import * as uuid from 'uuid';

function getUuid() {
  return uuid.v4().replaceAll('-', '_');
}

/**
 * @param program Structured IPDL program.
 * @returns {string} FOL clauses corresponding to `program`.
 */
export function programToFol(program, context = []) {
  let clauses = [];

  Object.entries(program.declarations).forEach(([name, decl]) => {
    declarationToFol(name, decl).forEach(declClause => clauses.push(declClause));
  });

  Object.entries(program.chains).concat(Object.entries(program.rules)).map(([name, chain]) => {
    chainToFol(name, chain).forEach(chainClause => clauses.push(chainClause));
  });

  return clauses;
}

function declarationToFol(name, declaration) {
  if (declaration.class === 'Dictionary') {
    const code = [];
    Object.entries(declaration.properties). forEach(([innerName, innerDecl]) => {
      declarationToFol(declaration.name + '.' + innerName, innerDecl).forEach(declClause => {
        code.push(declClause);
      });
    });
    return code;
  } else if (declaration.type === 'object') {
    const code = [['object', `"${name}"`]];
    Object.entries(declaration.properties).forEach(([propName, propVal]) => {
      propertyToFol(`"${name}"`, `"${propName}"`, ipdlToFol(propVal)).forEach(c => code.push(c));
    });
    return code;
  }

  return [];
  //throw new Error(`Unrecognized declaration "${name}": ${JSON.stringify(declaration)}`);
}

function chainToFol(name, chain) {
  const chainSymbol = `chain_${name}`;
  const clauses = [['chain', chainSymbol]];

  if (chain.type === 'Chain') {
    clauses.push(['goal_chain', chainSymbol]);
  }

  const chainMatch = ['rule',
                      ['matches_chain', chainSymbol, 'Situation']];

  clauses.push(chainMatch);

  chain.children.forEach(situation => {
    const [sitCode, sitSymbol] = situationToFol(situation);
    sitCode.forEach(c => clauses.push(c));
    chainMatch.push(['situation', 'Situation']);
    chainMatch.push(['matches_situation', sitSymbol, 'Situation']);
  });

  (chain.annotations || []).forEach(annotation => {
    annotationToFol(annotation, chainSymbol).forEach(c => clauses.push(c));
  });

  return clauses;
}

function situationToFol(situation, chain) {
  if (situation.type === 'any') {
    const situationSymbol = `situation_${getUuid()}`;
    const rule = ['rule',
                  ['matches_situation', situationSymbol, 'Situation'],
                  ['situation', 'Situation']];

    return [[rule], situationSymbol];
  } else if (situation.type === 'block') {
    const situationSymbol = `situation_${getUuid()}`;
    const situationVar = 'Situation';
    const rule = ['rule',
                  ['matches_situation', situationSymbol, situationVar],
                  ['situation', situationVar]];
    const code = [rule];

    Object.entries(situation.properties).forEach(([key, val]) => {
      if (key === 'event' && val.type === 'expression') {
        const [exprCode, exprSymbol] = expressionToFol(val);
        exprCode.forEach(c => code.push(c));
        propertyToFol(situationVar, '"event"', `${situationVar}_event`).forEach(c => rule.push(c));
        rule.push(['matches_situation', exprSymbol, `${situationVar}_event`]);
      } else if (key === 'event') {
        propertyToFol(situationVar, '"event"', `"${val.value}"`).forEach(c => rule.push(c));
      }
    });

    return [code, situationSymbol];
  } else if (situation.type === 'logic_block') {
    return [[], `situation_${getUuid()}`];
  } else if (situation.type === 'operation' && situation.operator === 'causal') {
    return causalToFol(situation);
  } else if (situation.type === 'operation' && situation.operator === 'or') {
    return orToFol(situation);
  } else if (situation.type ===  'rule_call') {
    return ruleCallToFol(situation);
  } else if (situation.type === 'variable') {
    const sitSymbol = `situation_${getUuid()}`;

    const rule = ['rule',
                  ['matches_situation', sitSymbol, 'Situation'],
                  ['matches_situation', `matches_situation_${sanitize(situation.value)}`, 'Situation']];

    return [[rule], sitSymbol];
  }

  throw new Error(`Unparsable situation: ${JSON.stringify(situation)}`);
}

function expressionToFol(expression) {
  // assuming `or` expression
  const sitSymbol = `situation_${getUuid()}`;
  const code = [];

  expression.children.forEach(operand => {
    const [opCode, opSymbol] = situationToFol(operand);
    opCode.forEach(c => code.push(c));
    code.push(['rule',
               ['matches_situation', sitSymbol, 'Situation'],
               ['matches_situation', opSymbol, 'Situation']]);
  });

  return [code, sitSymbol];
}

function causalToFol(causal) {
  const situationSymbol = `situation_${getUuid()}`;
  const code = [];
  const operandSymbols = [];

  // Stringify situations
  causal.children.forEach((situation, i) => {
    const [sitCode, sitSymbol] = situationToFol(situation);
    sitCode.forEach(c => code.push(c));
    operandSymbols.push(sitSymbol);
  });

  const matchRule = ['rule',
                     ['matches_situation', situationSymbol, 'Situation'],
                     ['matches_situation', operandSymbols[operandSymbols.length - 1], 'Situation']];

  let currentVar = `Situation`;

  // Stringify causal relationships
  // i > 0 skips the last operand on purpose; we aren't interested in first causes
  for (let i = causal.children.length - 1; i > 0; i--) {
    const situation = causal.children[i];

    // skip wildcards, they're only relevant in terms of their neighbours
    if (situation.type === 'any') continue;

    const direct = causal.children[i - 1]?.type !== 'any';
    const previousVar = currentVar;
    currentVar = `Situation_${getUuid()}`;

    if (direct) {
      matchRule.push(['matches_situation', operandSymbols[i - 1], currentVar]);
      matchRule.push(['direct_cause', currentVar, previousVar]);
    } else {
      matchRule.push(['matches_situation', operandSymbols[i - 2], currentVar]);
      matchRule.push(['indirect_cause', currentVar, previousVar]);
    }
  }

  code.push(matchRule);

  return [code, situationSymbol];
}

function orToFol(orOp) {
  const situationSymbol = `situation_${getUuid()}`;
  const code = [];
  const operandSymbols = [];

  // Stringify situations
  orOp.children.forEach((situation, i) => {
    const [sitCode, sitSymbol] = situationToFol(situation);
    sitCode.forEach(c => code.push(c));
    if (sitSymbol) operandSymbols.push(sitSymbol);
  });

  // Stringify disjunctions
  operandSymbols.forEach(operand => {
    code.push(['rule',
               ['matches_situation', situationSymbol, 'Situation'],
               ['situation', 'Situation'],
               ['matches_situation', operand, 'Situation']]);
  });

  return [code, situationSymbol];
}

function ruleCallToFol(ruleCall) {
  const situationSymbol = `situation_${getUuid()}`;
  const rule = ['rule',
                ['matches_situation', situationSymbol, 'Situation'],
                ['situation', 'Situation'],
                // XXX fix name handling
                ['matches_chain', `chain_${ruleCall.name}`, 'Situation']];

  return [[rule], situationSymbol];
}

function ipdlToFol(ipdl) {
  if (ipdl.type === 'object') {
    return objectToFol(ipdl);
  } else if (ipdl.type === 'string') {
    return `"${ipdl.value}"`;
  }

  throw new Error(`Unknown IPDL item type: ${JSON.stringify(ipdl)}`);
}

function objectToFol(name, obj, kind) {
  const symbol = `object_${name}`;
  const code = [[kind || 'object', symbol]];
  Object.entries(obj.properties).forEach(([key, val]) => {
    const [code, symbol] = ipdlToFol(val);
    if (val.type === 'object') throw new Error(`Nested object: ${JSON.stringify(obj)}`);
    propertyToFol(symbol, key, ipdlToFol(val)).forEach(c => code.push(c));
  });

  return [code, symbol];
}

function annotationToFol(annotation, target) {
  if (!target) throw new Error(`Orphan annotation "${annotation.name}" on ${target}`);

  const annotationSymbol = `${target}_annotation_${annotation.name}`;

  const code = [['annotation', target, `"${annotation.name}"`, annotationSymbol]];

  Object.entries(annotation.properties).map(([key, rawVal]) => {
    let val = rawVal.value;
    // TODO variables
    if (rawVal.type === 'string') {
      val = JSON.stringify(rawVal.value);
    }

    propertyToFol(annotationSymbol, `"${key}"`, val).forEach(c => code.push(c));
  });

  return code;
}

function propertyToFol(entity, attribute, value) {
  return [['prop', attribute, entity, value]];
}

function sanitize(value) {
  if (typeof value !== 'string') {
    throw new Error(`Asked to sanitize non-string value ${JSON.stringify(value)}`);
  }

  return value.replace(/[\.\-]/g, "_");
}
