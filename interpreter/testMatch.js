import parser from './src/parser/parser.js';
import matchTree from './src/utils/match.js';

const program = parser('sample/weddingInsuranceSectioned/weddingInsuranceSectioned.ipdl');

matchTree(program, [{
  name: "Situation",
  properties: {
    event: "Event.NoShow",
    relation: {
      properties: {
        type: "Relation.CausedBy",
        target: "intended officiating minister or registrar"
      }
    }
  }
}, {
  name: "Situation",
  properties: {
    event: "Event.UnavoidableCancellation",
    relation: [{
      properties: {
        type: "Relation.HappenTo",
        target: "wedding"
      }
    }, {
      properties: {
        type: "Relation.CausedBy",
        target: "me"
      }
    }]
  }
}, {
  name: "Situation",
  properties: {
    event: "Event.IntentionToReplan",
    relation: [{
      properties: {
        type: "Relation.HappenTo",
        target: "wedding"
      }
    }, {
      properties: {
        type: "Relation.By",
        target: "me"
      }
    }]
  }
}]);