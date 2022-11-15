import fs from 'fs';
import * as epilog from './index.js';

const program = fs.readFileSync(process.argv[2], 'utf-8');

console.log(epilog.ipdlToEpilog(JSON.parse(program)));
