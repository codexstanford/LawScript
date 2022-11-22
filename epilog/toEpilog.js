import fs from 'fs';
import * as epilog from './index.js';

const ast = fs.readFileSync(process.argv[2], 'utf-8');

console.log(epilog.programToEpilog(JSON.parse(ast)));
