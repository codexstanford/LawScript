import fs from 'fs';
import parser from './src/parser/parser.js';

const program = fs.readFileSync(process.argv[2], 'utf-8');

parser(program);