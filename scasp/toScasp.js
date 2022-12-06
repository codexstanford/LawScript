import fs from 'fs';
import * as scasp from './index.js';

const fol = fs.readFileSync((process.argv[2] || 0), 'utf-8');

console.log(scasp.programToCode(JSON.parse(fol)));
