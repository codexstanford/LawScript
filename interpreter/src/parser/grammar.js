import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ohm from 'ohm-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * The Grammar of PLIL (name pending)
 * Can be test with:
 * https://ohmjs.org/editor/
 * 
 * This should be a copy of the content of the grammar.ohm file in the grammar directory
 * 
 * We need to use Sting.raw to prevent line break to broke the grammar parser (Ohm requirement)
 */

const grammarPath = `${__dirname}/grammar/grammar.ohm`;

const grammar = String.raw`${fs.readFileSync(grammarPath, 'utf8')}`;

/**
 * We pre load the grammar once so multiple call for parse are faster
 */
const myGrammar = ohm.grammar(grammar);

/**
 * Parse a program 'file' against the grammar to build an AST
 * @param {*} fileContent
 */
export default function parseFileContentWithGrammar(fileContent) {
  const matchResult = myGrammar.match(fileContent);

  if (!matchResult.succeeded()) {
    throw new Error(`Parsing error: ${matchResult.message}`);
  }

  return matchResult;
}
