const path = require('path');
const fs = require('fs');

const pdfToTextPages = require('./modules/pdfToTextPages.js');
const pagesToMarkdown = require('./modules/pagesToMarkdown.js');
const markdownToSnippets = require('./modules/markdownToSnippets.js');
const toLawScript = require('./modules/toLawScript.js');
const fixLawScript = require('./modules/fixLawScript.js');

let filePath = `${__dirname}/testData/96.pdf`;

async function process(target) {
  const parsedPath = path.parse(filePath);
  const outPath = {
    dir : `${parsedPath.dir}/${parsedPath.name}`,
    name : parsedPath.name
  };
  if (!fs.existsSync(outPath.dir)) {
    fs.mkdirSync(outPath.dir);
  }
  const pages = await pdfToTextPages(target, outPath.dir);

  const md = await pagesToMarkdown(pages, outPath.dir);

  const snippets = await markdownToSnippets(md, outPath.dir);
  const lawScript =  await toLawScript(snippets, outPath.dir) ;
  const lawScriptFixed =  await fixLawScript(lawScript, outPath.dir) ;

}

process(filePath)