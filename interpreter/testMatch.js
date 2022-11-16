
import parser from './src/parser/parser.js';

import match from './src/utils/match.js';

let program = parser(process.argv[2]);

// empty
match(program, {});