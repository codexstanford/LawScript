const fs = require('fs');
const prompt = require('../utils/prompt.js');

async function markdownToSnippets(markdown, outDir) {
  if (!fs.existsSync(`${outDir}/markdownToSnippets`)) {
    fs.mkdirSync(`${outDir}/markdownToSnippets`);
  }



  const md = markdown.split('\n');

  let titleHierarchy = [];
  let currentClause = [];
  
  let snippets = [];
  for (let line of md) {
  
    let lvl = getTitleLvl(line);
    if (lvl) {
      if (currentClause.length) {

      /*  if (currentClause.join().length > 2000) {
          console.log('CUT');
          let snippetAnswer = await prompt(`Cut the following text in as many block as possible. return the resulting string as a JSON array.
${currentClause.join('\n')}

JSON:`);
console.log(snippetAnswer.answer);
          let factoids = JSON.parse(snippetAnswer.answer);
          for (let str of factoids) {
            let snippet = renderClause([str], titleHierarchy);
            if (snippet) {
              snippets.push(snippet);
            }
          }
        }
        else {*/
          const snippet = renderClause(currentClause, titleHierarchy);
          if (snippet) {
            snippets.push(snippet);
          }
       // }
   

        currentClause = [];
      }
      titleHierarchy.push(line);
    }
    else {
      currentClause.push(line);
    }
  }

  for (let [index, snippet] of snippets.entries()) {
 
    fs.writeFileSync(
      `${outDir}/markdownToSnippets/snippet-${(index + "").padStart(5, "0")}.md`,
       snippet, 
       "utf-8")
  }

  return snippets;
}



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





function renderClause(clause, titles) {

  //handle empty clauses
  if (!clause.join().trim().length) {
    return;
  }
  let maxLvl = 10000;
  let selectedTitles = [];
  for (let i = titles.length -1; i >= 0; i--) {
    let lvl = getTitleLvl(titles[i]);
    if (maxLvl > lvl) {
      maxLvl = lvl;
      selectedTitles.unshift(titles[i]);
    }
  }

  let renderText = selectedTitles.join('\n');
  renderText += '\n';
  renderText += clause.join('\n');


  return renderText;

}





module.exports = markdownToSnippets;