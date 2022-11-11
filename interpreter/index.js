import fs from 'fs';
import * as url from 'url';
import parser from './src/parser/parser.js'


const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const program = fs.readFileSync(`${__dirname}/../sample/weddingCancelation.ipdl`, 'utf-8');

parser(program);