import fs from 'fs';
import * as fol from './index.js';

const ast = fs.readFileSync((process.argv[2] || 0), 'utf-8');

console.log(JSON.stringify(fol.programToFol(JSON.parse(ast))));
