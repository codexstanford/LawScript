export default function linkProgram(program) {
  for (let chain of Object.values(program.chains)) {
    linkVariable(chain, program);
  }
  for (let rule of Object.values(program.rules)) {
    linkVariable(rule, program);
  }
  for (let annotation of program.annotations) {
    linkVariable(annotation, program);
  }
}


function linkVariable(scope, program) {
  if (scope.type == "variable") {
    checkVariable(scope, program);
    return;
  }
  if (scope.properties) {
    for (let prop in scope.properties) {
      linkVariable(scope.properties[prop], program);
    }
  }

  let children = scope.children;

  if (Array.isArray(scope)) {
    children = scope;
  }
  if (!children) {
    return;
  }

  for (let item of children) {
    linkVariable(item, program);
  }

  if (scope.annotations) {
    for (let item of scope.annotations) {
      linkVariable(item, program);
    }
  }


}

function checkVariable(item, program) {

  let path = item.value.split(".");

  // Check if variable is declared
  let parent = program.declarations;
  let namedVariable = true;
  for (let subpath of path) {
    if (!parent[subpath]) {
      namedVariable = false;
      break;
    }
    parent = parent[subpath].properties;
  }

  if (!namedVariable) {
    item.class = "scopeVariable";
    return;
  }

  if (program.declarations[path[0]].class == "Dictionary") {
    item.class = "dictionaryValue";
    item.info = {
      dictionary : path[0],
      key: path[1],
      value: program.declarations[path[0]].properties[path[1]]
    }
    return;
  }


  item.class = "namedVariable";
  item.info = {
    type : program.declarations[path[0]].class
  }



}
