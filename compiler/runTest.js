
import fs from 'fs';
import parser from './src/parser/parser.js';

const testDirectory = "../sample/featureTest/"
async function run() {
  

  console.log(JSON.stringify(program, null, 2));
}

async function runTests() {
  let tests =  fs.readdirSync(testDirectory).filter((file) => file.indexOf('.ls') != -1);
  for (let test of tests) {
    let program = await parser(`${testDirectory}/${test}`);
    let testFileName = `${testDirectory}/${test}`.replace('.ls', '-result.json');
    console.log(`Running test ${test}`);
    if (fs.existsSync(testFileName)) {
      let testValue = fs.readFileSync(testFileName, 'utf8');
      if (JSON.stringify(program, null, 2) != testValue) {
        console.log("TEST Failed");
      }
    }
    else {
      fs.writeFileSync(testFileName, JSON.stringify(program, null, 2), 'utf8')
    }
  }
}

runTests();