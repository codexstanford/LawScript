import fs from 'fs';
import programToCypher from './cypherHelper.js'; 
const ast = fs.readFileSync(process.argv[2], 'utf-8');

console.log(programToCypher(JSON.parse(ast)));
