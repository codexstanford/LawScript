
import parser from './src/parser/parser.js';

import match from './src/utils/match.js';

let program = parser(process.argv[2]);

// query is a causal chain as an array
// empty
match(program,
  [
    {
      Situation: {
      event: "Event.NoShow"
      }
    },
    {
      Situation: {
        event: "Event.UnavoidableCancellation"
      }
    }
  ]
);