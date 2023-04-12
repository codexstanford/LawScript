const execSync = require('child_process').execSync;
const fs = require('fs');
 
// Read a pdf and translate print it into a text
async function pdfToTextPages(pdfPath, outDir) {

  if (!fs.existsSync(`${outDir}/pdfToTextPages`)) {
    fs.mkdirSync(`${outDir}/pdfToTextPages`);
  }

  execSync(`pdftotext -layout ${pdfPath} ${outDir}/pdfToTextPages/allPages.txt`);

  const text = fs.readFileSync(`${outDir}/pdfToTextPages/allPages.txt`, 'utf8');

  const pages = text.split('');
  for (let [index, page] of pages.entries()) {
    fs.writeFileSync(`${outDir}/pdfToTextPages/page-${(index + "").padStart(4, '0')}.txt`, page, 'utf8');
  }

  console.log(`PDF Parse, ${pages.length} pages identified`);
  return pages;
}

module.exports = pdfToTextPages;