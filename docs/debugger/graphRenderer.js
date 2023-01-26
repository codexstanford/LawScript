let theater = document.getElementById('theater');

function render(data) {
  if (!data) {
    data = JSON.parse(jsonIn.value);
  }

  theater.innerHTML = "";
//     renderDeclarations(data);

theater.appendChild(renderASection(data, "Program"));
}
render(SAMPLE);

function renderASection(data, name) {
  let div = renderASectionContent(data);
  div.className = "chain";
  div.prepend(renderTitle(`&sect;${name}`));
  return div;
}

function renderASectionContent(data) {
  let div = document.createElement('div'); 
  if (data.annotations) {
    for (let annotation of data.annotations) {
      div.appendChild(renderAnnotation(annotation))
    }
  }

  if (data.assignations) {
    for (let assignation of data.assignations) {
      div.appendChild(renderAnAssignation(assignation));
    }
  }
  if (data.sections) {
    for (let sectionName in data.sections) {
      div.appendChild(renderASection(data.sections[sectionName], sectionName))
    }
  }
  if (data.assignation) {
    for (let assignation of data.assignations) {
      div.appendChild(renderInstruction(instruction))
    }
  }
  if (data.instructions) {
    for (let instruction of data.instructions) {
      div.appendChild(renderInstruction(instruction))
    }
  }
  return div;
}

function renderAnAssignation(assignation) {
  let div = document.createElement('div');
  div.className = "assignation"
  div.innerHTML += " <span class='verb'> SET </span> ";
  div.innerHTML += renderValueHTML(assignation.value);
  div.innerHTML += " <span class='verb'> TO </span> ";
  div.innerHTML += assignation.name;
  return div;
}


function renderInstruction(node) {
  let div = document.createElement("div");

  

  if (node.annotations) {
    for (let annotation of node.annotations) {
      div.appendChild(renderAnnotation(annotation));
    }
  }
  
  if (node.isSectionCall) {
    let sectionCall = document.createElement('div');
    sectionCall.className = "sectionCall";
    sectionCall.innerHTML = `ref:&#167;${node.sectionName}`;
    div.appendChild(sectionCall);
  }

  else if (node.type == "operation" && (node.operator == "causal" || node.operator == "time")) {
    let causalBlock = document.createElement('div');

    causalBlock.className = "block causal";
    let firstFlag = true;
    for (let item of node.children) {
      if (!firstFlag) {
        causalBlock.appendChild(renderLeadTo(node.operator));
      }
      causalBlock.appendChild(renderInstruction(item));
      firstFlag = false;
    }
    div.appendChild(causalBlock);
  }

  

  else if (node.type == "operation" && (node.operator == "or" || node.operator == "and")) {
    div.className = "block or";
    let firstFlag = true;
    for (let item of node.children) {
      if (!firstFlag) {
        div.appendChild(renderOperand(node.operator));
      }
      div.appendChild(renderInstruction(item));
      firstFlag = false;
    }
  }
  else if (node.type == "operation" && (node.operator == "not" )) {
    div.className = "block not";
    let firstFlag = true;
   
    for (let item of node.children) {
      let instructionDiv = renderInstruction(item);
      instructionDiv.style.display = 'flex';
      instructionDiv.prepend(renderNot());
      div.appendChild(instructionDiv);
    }
  }
  else if (node.type == "logic_block") {
    if (node.isChainCall) {
      let fnc = document.createElement('div');
      fnc.className = "functionCall";
      fnc.innerHTML = `Chain:${node.isChainCall}`
      div.appendChild(fnc);
    }
    else {
      node.className = "block"
      if (node.children.length) {
        for (let item of node.children) {
         div.appendChild(renderInstruction(item));
        }
      }
      else {
        div.appendChild(renderInstruction(node.children));
      }
    }
   
  
  }
  else if (node.type == "block") {
    div.appendChild(renderBlock(node))
  }
  else if (node.type == "variable") {
    div.innerHTML += renderItemHTML(node);
  }
  else {
    // unsuported so debug
    debugger;
    console.log(node, node.type);
  }


  return div;
}

function renderItemHTML(item) {
  let html = "";
  if (Array.isArray(item)) {
      html =  renderArrayPropertyHTML(item);
    }
    else if (item.type == "object") {
      html = renderPropertyObjHTML(item);
    }
    else if (item.type == "operation") {
      html = renderExpressionPropertyHTML(item);;
    }
    else {
      html = `<div class='fullWidth'> ${renderValueHTML(item)} </div>`;
    }
  return html;
}

function renderValueHTML(item) {

  if (item.type == "variable") {
    return renderVariableHTML(item);
  } 
  else if (item.type == "operation") {
    return renderExpressionPropertyHTML(item);;
  }
  else if (item.type == "string") {
    return `"${item.value}"`;
  }
  else if (item.type == "number") {
    return item.value;
  }
  else if (item == "infinity") {
    return "&infin;";
  }
  else if (item == "negativeInfinity") {
    return "-&infin;";
  }
  else if (item.type == "range") {
    return `[
      ${(item.strictBoundFrom)? "=": ""}
      ${renderValueHTML(item.from)}
      ...
      ${renderValueHTML(item.to)}
      ${(item.strictBoundTo)? "=": ""}
    ]`
  }
  else if (item.type == "mathematical_expression") {
    return renderValueHTML(item.value)
  }
  else if (item.type == "operation_logic_block") {
    return renderExpressionPropertyHTML(item)
  }
  else if (item.type == "block") {
    return renderBlock(item).outerHTML;
  }
  else if (item.type == "object") {
    return renderPropertyObjHTML(item, "objectValue");
  }
  else {
    debugger;
  }
  return item.value;
}

function renderVariableHTML(item) {

  if (item.class == 'enumValue') {
    return `<span class='variable'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 459.319 459.319" style="enable-background:new 0 0 459.319 459.319;" xml:space="preserve">
        <g color="#888">	<path d="M141.288,189.821h-23.685V145.28h23.528v-23.69h21.016v23.374h23.681v44.707h-23.681v0.151H141.288z M60.801,398.87   c0.012,1.1,0.03,1.921,0.042,2.459c0.006,0.331-0.053,0.638-0.071,0.963c0.739,18.224,15.755,32.817,34.146,32.817h303.76v-33.461   c0-6.68,5.421-12.105,12.105-12.105c6.679,0,12.105,5.426,12.105,12.105v45.565c0,6.686-5.427,12.105-12.105,12.105H93.091   c-0.629,0-1.235-0.089-1.847-0.183c-30.505-1.91-54.757-27.261-54.757-58.245c0-0.71,0.085-1.396,0.109-2.099   c-0.375-35.943,0-309.36,0.042-339.109c-0.047-0.423-0.127-0.827-0.127-1.259C36.511,26.205,62.719,0,94.938,0h19.343h293.535   h2.955c6.685,0,12.105,5.423,12.105,12.105v342.139c0,6.679-5.421,12.104-12.105,12.104c-0.071,0-0.13-0.023-0.201-0.023   c-0.887,0.213-1.82,0.354-2.772,0.354H94.918C76.736,366.674,61.859,380.948,60.801,398.87z M278.347,121.59h94.425v20.862h-23.685   v23.69h-23.525v23.685h-23.69v23.533h-23.536v49.882h120.792v-26.209h-94.584v-20.859h23.69V192.49h23.525v-23.69h23.689V145.28   h23.679V95.237h-120.78V121.59z M224.949,192.49h56.265v-26.353h-56.265V192.49z M91.41,263.229h26.2v-47.056h23.679v-0.15h44.54   v47.219h26.354v-120.79h-23.688v-23.841H164.81V95.237h-26.202v23.684h-23.685v23.69H91.389v120.618H91.41z"/></g>
      </svg>
      ${item.enumName}.${item.value}
      </span>`
  }


  if (item.name) {
    return `<span class='variable'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 482.8 482.8" style="enable-background:new 0 0 482.8 482.8;" xml:space="preserve">
        <g color="#888">
          <path d="M255.2,209.3c-5.3,5.3-5.3,13.8,0,19.1c21.9,21.9,21.9,57.5,0,79.4l-115,115c-21.9,21.9-57.5,21.9-79.4,0l-17.3-17.3    c-21.9-21.9-21.9-57.5,0-79.4l115-115c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-115,115C8.7,322.7,0,343.6,0,365.8    c0,22.2,8.6,43.1,24.4,58.8l17.3,17.3c16.2,16.2,37.5,24.3,58.8,24.3s42.6-8.1,58.8-24.3l115-115c32.4-32.4,32.4-85.2,0-117.6    C269.1,204,260.5,204,255.2,209.3z"/>
          <path d="M458.5,58.2l-17.3-17.3c-32.4-32.4-85.2-32.4-117.6,0l-115,115c-32.4,32.4-32.4,85.2,0,117.6c5.3,5.3,13.8,5.3,19.1,0    s5.3-13.8,0-19.1c-21.9-21.9-21.9-57.5,0-79.4l115-115c21.9-21.9,57.5-21.9,79.4,0l17.3,17.3c21.9,21.9,21.9,57.5,0,79.4l-115,115    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l115-115c15.7-15.7,24.4-36.6,24.4-58.8    C482.8,94.8,474.2,73.9,458.5,58.2z"/>
        </g>
      </svg>
      ${item.name}
      </span>`
  }
  return `<span class='variable'>${item.value}</span>`
}

function renderExpressionPropertyHTML(expression) {
  let html = "<div class='arrayProperty expression'>";

  let isFirst = true;
  for (let item of expression.children) {
    if (!isFirst) {
      html += `<div class='expressionOperator'>${expression.operator || "or"}</div>`;
    }
    html += renderItemHTML(item);
  
    isFirst  = false;
  }

  html += "</div>";
  return html;
}
function renderArrayPropertyHTML(list) {
  let html = "<div class='arrayProperty'>";
  
  let isFirst = true;

  for (let item of list) {
    if (!isFirst) {
      html += `<div class='expressionOperator'>and</div>`;
    }
    html +=renderItemHTML(item);
    isFirst = false;
  }

  html += "</div>";
  return html;
}
function renderPropertyObjHTML(obj, className='objProperty') {
  let html = `<div class='${className}'>`;

  for (let key in obj.properties) {
    if (Array.isArray(obj.properties[key])) {
      html +=  `<div class='fullWidth'> <div class='fullWidth'> ${key} : </div> ${renderArrayPropertyHTML(obj.properties[key])} </div>`
    }
    else if (obj.properties[key].type == "object") {
      html += `<div class='fullWidth'> ${key}: ${renderPropertyObjHTML(obj.properties[key])} </div>`
    }
    else if (obj.properties[key].type == "operation") {
      html +=  `<div class='fullWidth'> <div class='fullWidth'> ${key} : </div> ${renderExpressionPropertyHTML(obj.properties[key])} </div>`
    }
    else {
      html += 
      `<div class='fullWidth'> ${key}: ${renderValueHTML(obj.properties[key])} </div>`
    }
   
  }     

  html += "</div>";
  return html;
}



function renderBlock(node) {
  let div = document.createElement('div');
  div.className = 'block final';
    div.innerHTML = `
      <div class='finalTitle'> ${node.name} </div>   
    `;
    div.innerHTML += renderPropertyObjHTML(node, "noborder");
   
  return div;
}

function renderLeadTo(operator) {
  let div = document.createElement('div');
  div.className = 'leadTo';
  if (operator == "causal") {
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M24 12l-12-9v5h-12v8h12v5l12-9z"/>
    </svg>`;
  }
  if (operator == "time") {
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 9.518 37.866 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 8.518 c 0.552 0 1 0.448 1 1 S 10.07 37.866 9.518 37.866 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 57.872 77.188 c -0.603 0 -1.206 -0.229 -1.665 -0.688 l -9.587 -9.587 c -0.918 -0.92 -0.918 -2.414 0 -3.332 l 9.447 -9.447 H 29.181 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 29.301 c 0.404 0 0.77 0.243 0.924 0.617 c 0.155 0.374 0.069 0.804 -0.217 1.09 L 48.034 64.995 c -0.139 0.139 -0.139 0.365 0.001 0.505 l 9.585 9.585 c 0.139 0.14 0.365 0.139 0.504 0 l 29.78 -29.781 c 0.084 -0.084 0.099 -0.191 0.096 -0.266 c 0.003 -0.15 -0.012 -0.257 -0.096 -0.341 l -29.78 -29.781 c -0.181 -0.18 -0.321 -0.184 -0.504 0 l -9.586 9.585 c -0.139 0.139 -0.139 0.365 0 0.504 l 11.154 11.153 c 0.286 0.286 0.372 0.716 0.217 1.09 c -0.154 0.374 -0.52 0.617 -0.924 0.617 H 18.341 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 37.727 l -9.447 -9.447 c -0.918 -0.919 -0.918 -2.414 0 -3.332 l 9.586 -9.586 c 0.892 -0.891 2.444 -0.89 3.332 0 l 29.78 29.78 c 0.464 0.463 0.705 1.087 0.68 1.755 c 0.025 0.593 -0.216 1.216 -0.68 1.68 l -29.78 29.781 C 59.079 76.958 58.476 77.188 57.872 77.188 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 20.862 54.134 h -8.295 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 8.295 c 0.552 0 1 0.447 1 1 S 21.414 54.134 20.862 54.134 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 41.533 46 H 7.307 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 34.226 c 0.552 0 1 0.448 1 1 S 42.085 46 41.533 46 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`
  }


  return div;
}

function renderNot() {
  let div = document.createElement('div');
  div.className = 'leadTo';
  div.innerHTML = "!";
  return div;
}

function renderOperand(operand) {
  let div = document.createElement('div');
  div.className = 'orSymbol';
  div.innerHTML = operand.toUpperCase();

  return div;
}

function renderAny() {
  let div = document.createElement('div');
  div.className = 'any';
  div.innerHTML = "*";

  return div;
}

function renderTitle(txt) {
  let div = document.createElement('div');
  div.className = 'title';
  div.innerHTML = txt;
  return div;
}

function renderAnnotation(annotation) {
  let div = document.createElement('div');
 

  if (annotation.name == "Text") {
    div.className = 'textAnnotation';
    div.innerHTML = markdown(annotation.properties.value.value);
  }
  else {
    div.appendChild(renderBlock(annotation));
   /* div.className = `block annotation annotation${annotation.name}`;
    div.innerHTML = `
    <div>${annotation.name}</div>`;
    for (let key in annotation.properties) {
      div.innerHTML += `<div class='annotationProperty'> ${key}: ${renderItemHTML(annotation.properties[key])}`;
    }  */    
  }
 

  return div;
}

function renderDeclarations(data) {
  for (let declaration in data.declarations) {
    renderDeclaration(data.declarations[declaration]);
  } 
}

function renderDeclaration(declaration) {

  let div = document.createElement('div');
  //div.id = ;
  div.className = "block declaration";
  div.innerHTML = `
    <div> Type: ${declaration.class}</div>
    <div> Name: ${declaration.name}</div>
  `;
  theater.appendChild(div);

}

