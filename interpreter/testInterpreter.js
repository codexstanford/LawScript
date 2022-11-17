import fs from 'fs'
import {execSync} from 'child_process';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let testFiles = fs.readdirSync(`${__dirname}/tests`);

let succeed = 0;
let failed = 0;
for (let file of testFiles) {
  if (file.indexOf('.ipdl') != -1) {

    // run a a test

    console.log(`${file} ...`);

    const log = execSync(`node index.js ./tests/${file}`).toString();

    const groundTruth = fs.readFileSync(`./tests/${file.replace('.ipdl', '.expectedOutput')}`);

    if (groundTruth != log) {
      console.log(`Test failed`);
      failed++;
    }
    else {
      console.log(`Test succeed`);
      succeed++;
    }    
  }
}

console.log(`
Tests over
  Succeed: ${succeed}
  Failed: ${failed}
`)