import * as epilog from '@epilog/epilog';
import { v4 as getUuid } from 'uuid';

/**
 * @param program Structured IPDL program.
 * @returns {string} Epilog code corresponding to `program`.
 */
export function programToEpilog(program, context = []) {
  let code = "";

  // code += Object.entries(program.declarations).map(([kind, dict]) => {
  //   if (kind === 'Situation') return '';
  //   if (dict.class === 'class') return '';
  //   return Object.entries(dict.properties).map(([name, decl]) => {
  //     return objectToEpilog(name, decl, kind);
  //   });
  // })
  // .filter(code => !!code)
  // .join('\n\n');

  //code += program.chains.map(chainToEpilog).join('\n\n');

  code += '% Chains\n\n';

  code += Object.entries(program.chains).map(([name, chain]) => {
    return chainToEpilog(name, chain);
  }).join('\n\n');

  code += '\n\n% Declarations\n\n';

  code += Object.entries(program.declarations).map(([name, decl]) => {
    return declarationToEpilog(name, decl);
  }).join('\n\n');

  return code;

  // const [code, _] = ast.reduce(([code, context], node) => {
  //   if (node.type === 'annotation') {
  //     return [code + annotationToEpilog(node, context) + '\n', context];
  //   } else if (node.type === 'Chain') {
  //     context.push(node);
  //     const contentCode = ipdlToEpilog(node.content, context);
  //     context.pop();
  //     return [[code + chainToEpilog(context, node) + contentCode].join('\n'), context];
  //   } else if (node.type === 'operation') {
  //     context.push(node);
  //     const operandsCode = ipdlToEpilog(node.operands, context);
  //     context.pop();
  //     return [[code + operandsCode + operationToEpilog(node, context)].join('\n'), context];
  //   }

  //   return [code, context];
  // }, ['', context]);

  // return code;
}

function declarationToEpilog(name, declaration) {
  if (declaration.class === 'Dictionary') {
    return Object.entries(declaration.properties).map(([innerName, innerDecl]) => {
      return declarationToEpilog(declaration.name + '.' + innerName, innerDecl);
    }).join('\n\n');
  } else if (declaration.type === 'object') {
    let code = epilog.grind(['object', `"${name}"`]);
    code += Object.entries(declaration.properties).map(([propName, propVal]) => {
      return '\n' + epilog.grind(['prop', `"${name}"`, `"${propName}"`, ipdlToEpilog(propVal)]);
    });
    return code;
  }
}

function orToEpilog(orOp) {
  const situationSymbol = `situation_${getUuid()}`;
  let code = `situation(${situationSymbol})\n`;
  const operandSymbols = [];

  // Stringify situations
  orOp.operands.forEach((situation, i) => {
    const [sitCode, sitSymbol] = situationToEpilog(situation);
    code += sitCode + '\n';
    if (sitSymbol) operandSymbols.push(sitSymbol);
  });

  // Stringify disjunctions
  code += operandSymbols.map(operand => {
    return epilog.grind(['rule',
                         ['matches_situation', situationSymbol, 'Situation'],
                         ['situation', 'Situation'],
                         ['matches_situation', operand, 'Situation']]);
  }).join('\n');

  return [code, situationSymbol];
}

function situationToEpilog(situation, chain) {
  if (situation.type === 'block') {
    const situationSymbol = `situation_${getUuid()}`;
    let code = `situation(${situationSymbol})\n`;
    const situationVar = 'Situation';
    const rule = ['rule',
                  ['matches_situation', situationSymbol, situationVar],
                  ['situation', situationVar]];

    Object.entries(situation.properties).forEach(([key, val]) => {
      if (key === 'event' && val.type === 'expression') {
        const [exprCode, exprSymbol] = expressionToEpilog(val);
        code += exprCode;
        rule.push(['prop', situationVar, '"event"', `${situationVar}.event`]);
        rule.push(['matches_situation', exprSymbol, `${situationVar}.event`]);
      } else if (key === 'event') {
        rule.push(['prop', situationVar, '"event"', `"${val.value}"`]);
      }
    });

    code += epilog.grind(rule);

    return [code, situationSymbol];
  } else if (situation.type === 'logic_block') {
    return ['', `situation_${getUuid()}`];
  } else if (situation.type === 'operation' && situation.operator === 'causal') {
    return causalToEpilog(situation);
  } else if (situation.type === 'operation' && situation.operator === 'or') {
    return orToEpilog(situation);
  } else if (situation.type ===  'rule_call') {
    return ruleCallToEpilog(situation);
  } else if (situation.type === 'variable') {
    const sitSymbol = `situation_${getUuid()}`;
    let code = `situation(${sitSymbol})\n`;

    code += epilog.grind(['rule',
                          ['matches_situation', sitSymbol, 'Situation'],
                          ['matches_situation', `matches_situation_${situation.value}`, 'Situation']]);

    return [code, sitSymbol];
  }

  throw new Error(`Unparsable situation: ${JSON.stringify(situation)}`);
}

function expressionToEpilog(expression) {
  // assuming `or` expression
  const sitSymbol = `situation_${getUuid()}`;
  let code = `situation(${sitSymbol})\n`;

  expression.operands.forEach(operand => {
    const [opCode, opSymbol] = situationToEpilog(operand);
    code += opCode + '\n';
    code += epilog.grind(['rule',
                          ['matches_situation', sitSymbol, 'Situation'],
                          ['matches_situation', opSymbol, 'Situation']]);
    code += '\n';
  });

  return [code, sitSymbol];
}

function ruleCallToEpilog(ruleCall) {
  const situationSymbol = `situation_${getUuid()}`;
  let code = `situation(${situationSymbol})\n`;

  code += epilog.grind(['rule',
                        ['matches_situation', situationSymbol, 'Situation'],
                        ['situation', 'Situation'],
                        // XXX fix name handling
                        ['matches_chain', `chain_${ruleCall.name}`, 'Situation']]);

  return [code, situationSymbol];
}

function chainToEpilog(name, chain) {
  const chainSymbol = `chain_${name}`;
  let code = `chain(${chainSymbol})\n`;

  const chainMatch = ['rule',
                      ['matches_chain', chainSymbol, 'Situation']];

  chain.content.forEach(situation => {
    const [sitCode, sitSymbol] = situationToEpilog(situation);
    code += sitCode + '\n';
    chainMatch.push(['situation', 'Situation']);
    chainMatch.push(['matches_situation', sitSymbol, 'Situation']);
  });

  code += epilog.grind(chainMatch);

  return code;
}

function ipdlToEpilog(ipdl) {
  if (ipdl.type === 'object') {
    return objectToEpilog(ipdl);
  } else if (ipdl.type === 'string') {
    return `"${ipdl.value}"`;
  }

  throw new Error(`Unknown IPDL item type: ${JSON.stringify(ipdl)}`);
}

function objectToEpilog(name, obj, kind) {
  const symbol = `object_${name}`;
  let code = epilog.grind([kind || 'object', symbol]) + '\n';
  code += Object.entries(obj.properties).map(([key, val]) => {
    const [code, symbol] = ipdlToEpilog(val);
    if (val.type === 'object') throw new Error(`Nested object: ${JSON.stringify(obj)}`);
    return epilog.grind(['prop', symbol, `${key}`, ipdlToEpilog(val)]);
  }).join('\n');

  return [code, symbol];
}

function getSymbol(ast, context) {
  if (ast.type === 'annotation') {
    if (!context.length) throw new Error(`Orphan annotation: ${ast.name}`);
    return `${getSymbol(context[context.length])}_annotation_${ast.name}`;
  } else if (ast.type === 'block') {
    const chainAncestor = findAncestor(a => a.type === 'Chain');
    if (chainAncestor) {
      
    }
  } else if (ast.type === 'Chain') {
    return `chain_${ast.name}`;
  }

  return context.name;
}

function annotationToEpilog(annotation, context) {
  if (!context.length) throw new Error(`Orphan annotation: ${annotation.name}`);

  const targetSymbol = getSymbol(context[context.length]);
  const annotationSymbol = getSymbol(annotation, context);

  let code = epilog.grind(['annotation', targetSymbol, `${annotation.name}`, annotationSymbol]) + '\n';

  Object.entries(annotation.properties).forEach(([key, rawVal]) => {
    let val = rawVal.value;
    // TODO variables
    if (rawVal.type === 'string') {
      val = JSON.stringify(rawVal.value);
    }

    code += epilog.grind(['prop', annotationSymbol, `${key}`, val]) + '\n';
  });

  return code;
}

function causalToEpilog(causal) {
  const situationSymbol = `situation_${getUuid()}`;
  let code = `situation(${situationSymbol})\n`;
  const operandSymbols = [];

  // Stringify situations
  causal.operands.forEach((situation, i) => {
    const [sitCode, sitSymbol] = situationToEpilog(situation);
    code += sitCode + '\n';
    operandSymbols.push(sitSymbol);
  });

  const matchRule = ['rule',
                     ['matches_situation', situationSymbol, 'Situation']];

  let currentVar = `Situation`;

  // Stringify causal relationships
  // i > 0 skips the last iteration on purpose; we aren't interested in first causes
  for (let i = causal.operands.length - 1; i > 0; i--) {
    const situation = causal.operands[i];

    // skip wildcards, they're only relevant in terms of their neighbours
    if (situation.type === 'any') continue;

    const direct = causal.operands[i - 1]?.type !== 'any';
    const previousVar = currentVar;
    currentVar = `Situation_${getUuid()}`;

    if (direct) {
      matchRule.push(['matches_situation', operandSymbols[i], previousVar]);
      matchRule.push(['matches_situation', operandSymbols[i - 1], currentVar]);
      matchRule.push(['direct_cause', currentVar, previousVar]);
    } else {
      matchRule.push(['matches_situation', operandSymbols[i], previousVar]);
      matchRule.push(['matches_situation', operandSymbols[i - 2], currentVar]);
      matchRule.push(['indirect_cause', currentVar, previousVar]);
    }
  }

  code += epilog.grind(matchRule);

  return [code, situationSymbol];
}
