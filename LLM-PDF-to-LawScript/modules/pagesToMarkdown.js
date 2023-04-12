const fs = require('fs');
const { title } = require('process');
const prompt = require('../utils/prompt.js')


function getTitleLvl(str) {
  let lvl = 0;
  for (let c of str) {
    if (c == '#') {
      lvl++;
    }
    else {
      return lvl;
    }
  }
  return lvl;
}

function buildTitleHierarchy(str) {
  let lines = str.split('\n');

  let titleHierarchy = []
  for (let line of lines) {
    let lvl = getTitleLvl(line);
    if (lvl != 0) {
      if (!titleHierarchy.length) {
        titleHierarchy.push(line);
      }
      else {
        let i = titleHierarchy.length;
        while (i && getTitleLvl(titleHierarchy[--i]) >= lvl) {
          titleHierarchy.pop();
        }
        titleHierarchy.push(line);
      }
    }
  }

 return titleHierarchy.join('\n');

}

async function pagesToMarkdown(pages, outDir=null) {

  if (!fs.existsSync(`${outDir}/pagesToMarkdown`)) {
    fs.mkdirSync(`${outDir}/pagesToMarkdown`);
  }

  let markdownPages = [];

  let title = "";
  for (let [index, page] of pages.entries()) {
    const pageCachePath = `${outDir}/pagesToMarkdown/page-${(index + "").padStart(4, '0')}.md`;
    if (fs.existsSync(pageCachePath)) {
      markdownPages.push(fs.readFileSync(pageCachePath, 'utf8'));
      continue;
    }


    let previousPage = null;
    if (markdownPages.length) {
      previousPage = markdownPages[markdownPages.length - 1];
      if (markdownPages.length > 1) {
        title = buildTitleHierarchy(markdownPages.slice(0, markdownPages.length - 2).join('\n')) + '\n';
      }
    }
    console.log(`Pages to Markdown, page ${index + 1} / ${pages.length}`);

    console.log("Step 1");
    const pageMarkdown =  await prompt(`
Here is a page extracted from a PDF:
${page}

Transform it into a correct markdown, identifying the headings and remove the pages header and footers. Do not invent text. Do not use bold and italic to denote title, instead use # notation with as many '#' as needed. In case of alpha numerical list do not use the list notation. Instead create title "List item X" using the appropriate number of #. 
${previousPage? `Please make sure to continue on previous page markdown:
${title}${previousPage}` : ""}`);

    fs.writeFileSync(pageCachePath, pageMarkdown.answer, 'utf8');
    markdownPages.push(pageMarkdown.answer);  

    /*
    fs.writeFileSync(pageCachePath + ".step1", pageMarkdown.answer, 'utf8');
    console.log("Step 2");
    const deltaMarkdownPage =  await prompt(`Here is a pdf extract page and it's associated generated markdown. List all instance of omitted text in the markdown. If the markdown and the text are identical write NO_DIFFERENCE.
TEXT: ${page}
MARKDOWN: ${pageMarkdown.answer}
    `);

    fs.writeFileSync(pageCachePath + ".step2", deltaMarkdownPage.answer, 'utf8');

    if (deltaMarkdownPage.answer.indexOf('NO_DIFFERENCE') !== -1) {
      fs.writeFileSync(pageCachePath, pageMarkdown.answer, 'utf8');
      markdownPages.push(pageMarkdown.answer);
      continue;
    }
    console.log("Step 3");
    const fixedMarkdownPage =  await prompt(`Can you convert the following text into a correct text and structured it as a Markdown, identifying the headings and correctly removing the header and footers? Do not rewrite the content, do not repeat yourself except in case it is necessary. ${titleHierarchy.length? `Previous pages of the document used the following title hierarchy:
${titleHierarchy.join('\n')} 
try to keep title hierarchy in this context if possible.` : ""}
Be sure to include the following things: 
${deltaMarkdownPage.answer}
TEXT:${page}
    `);
    fs.writeFileSync(pageCachePath + ".step3", fixedMarkdownPage.answer, 'utf8');
    fs.writeFileSync(pageCachePath, fixedMarkdownPage.answer, 'utf8');
    markdownPages.push(fixedMarkdownPage.answer);  
  */
  }

  fs.writeFileSync(`${outDir}/pagesToMarkdown/content.md`, markdownPages.join('\n'), 'utf8');

  return markdownPages.join('\n');

}


function getTitleHierarchy(pages) {
  let titleHierarchy = []; 
  for (let page of pages) {
    for (let line of page.split('\n')) {
      if (line.indexOf('#') == 0) {
        let lvl = 0;
        while (line[lvl++] == '#');
        titleHierarchy[lvl] = line;
        titleHierarchy.splice(lvl + 1);
      }
    }
  }
  return titleHierarchy.slice(2);
}

module.exports = pagesToMarkdown;
