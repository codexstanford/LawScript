
import parser from './src/parser/parser.js';

async function run() {
  let program = await parser(process.argv[2]);

  console.log(JSON.stringify(program, null, 2));
}

run();