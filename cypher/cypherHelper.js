
let initialId = 1;



export default function programToCypher(ast) {
 
  let objStack = [];
  let relStack = [];


  for (let declarationName in ast.declarations) {
    let declaration = ast.declarations[declarationName];

    declaration._id = initialId++;
    if (declaration.class == "class") {
   
      objStack.push({
        type: "class",
        name: declarationName,
        id: declaration._id
      });

      // todo handle class properties
    } else if (declaration.class == "Dictionary") {


    } else if (declaration.class == "alias") {
    
      objStack.push({
        type: "alias",
        name: declarationName,
        id: declaration._id
      });

      for (let child of declaration.properties.is) {

        let tid = getIdFromPath(child.value, ast);
        if (tid) {
          relStack.push({
            type: "alias_of",
            from: declaration._id,
            to: tid[0]
          })
        }
      }
    }
    else {
      objStack.push({
        type: "object",
        name: declarationName,
        id: declaration._id
      });
    }
  }

  for (let chain of ast.chains) {
    run(chain, objStack, relStack, ast);
  }

  generateCypher(objStack, relStack);
 
}

function getIdFromPath(path, ast) {
  let target =  ast.declarations;
  let ret = [];
  if (Array.isArray(path)) {
    for (let item of path) {
      ret.push(getIdFromPath(item, ast));
    }
  }
  else if (path) {
    path = path.split(".");
    while (path.length) {
      target = target[path.shift()];
    }
    if (target) {
      ret.push(target.id || target._id);
    }

  }
 
  return ret;
}


function run(node, objStack, relStack, ast) {
  node._id = initialId++;

  if (node.type == "chain") {
    for (let child of node.children) {
      run(child, objStack, relStack, ast);
      debugger;
      for (let item of child.inId) {
        relStack.push({
          type: "start_with",
          from: node._id,
          to: item
        });
      }
     
    }

    for (let child of node.annotations) {
      run(child, objStack, relStack, ast);
      relStack.push({
        type: "annotation",
        from: node._id,
        to: child.inId
      });
    }

    objStack.push({
      type: "chain",
      name: node.name,
      id: node._id
    });

    node.inId = [node._id];
    node.outId = [node._id];
  }
  else if (node.type == "logic_block") {
    if (node.children.length > 1) {
     // console.log("Long logic block not supported", node);
    }
    for (let child of node.children) {
      run(child, objStack, relStack, ast);
      node.inId = child.inId;
      node.outId = child.outId;
      return node._id;
    }
  }
  else if (node.type == "any") {
    objStack.push({
      type: "logicNode",
      value: "any",
      id: node._id
    })
    node.inId = [node._id];
    node.outId = [node._id];
    return node._id;
  }

  else if (node.type == "operation") {
    if (node.operator == "causal") {
      let prevRel = null;
      for (let child of node.children) {
        run(child, objStack, relStack, ast);
        if (!node.inId) {
          node.inId = child.inId;
        }
        else {

          for (let item of child.inId) {
            for (let itemP of prevRel) {
              relStack.push({
                type: "lead_to",
                from: itemP,
                to: item
              });
            }
          }
        
        }
        prevRel = child.outId;
      }
      node.outId = prevRel;
      return node._id;
    }
    else if (node.operator == "or") {
      let ids = [];
      node.inId = [];
      node.outId = [];
      for (let child of node.children) {
        let id = run(child, objStack, relStack, ast);
        if (!Array.isArray(id)) {
          id = [id];
        }
        node.inId = [...node.inId, ...child.inId];
        node.outId = [...node.outId, ...child.outId];
        ids = [...ids, ...id];
      }
      return ids;
    }
    else {
    //  ("unsupported operator", node)
    }
  }
  else if (node.type == "annotation") {
    let formattedAnnotation = {
      id: node._id,
      annotationName: node.name
    };
    for (let property in node.properties) {
      formattedAnnotation[property] = node.properties[property].value;
    }
    if (formattedAnnotation.type) {
      formattedAnnotation.annotationType = formattedAnnotation.type;
    }

    formattedAnnotation.type = "Annotation";
    objStack.push(formattedAnnotation);
    node.inId = [node._id];
    node.outId = [node._id];
  }
  else if (node.type == "block") {
   
    let formattedBlock = {
      id: node._id,
      type: node.name
    };

    let matrix = {};
    let isMatrix = false;
    let relations = [];
    for (let propertyName in node.properties) {
      let property = node.properties[propertyName];
      if (!Array.isArray(property)) {
        if (property.type == "expression") {
          if (property.operator == "or") {
            matrix[propertyName] = [];
            for (let child of property.children) {
              matrix[propertyName].push(child.value); 
            }
            isMatrix = true;
          }
        }
        else if (propertyName != "relation") {
          formattedBlock[propertyName] = property.value;
        }
        else {  
          let tid = getIdFromPath(property.properties.target.value, ast);
 
            for (let item of tid) {
              relations.push({
                type:  property.properties.type.value,
                to: item
              });
          }
        }
      }
    }

    if (isMatrix) {
      let children = [formattedBlock];
      for (let key in matrix) {
        let newChildren = [];
        for (let child of children) {
          for (let value of matrix[key]) {
            let newItem = {...child};
            newItem[key] = value;
            newChildren.push(newItem);
          }
        }
        children = newChildren;
      }
      let ids = [];
      for (let child of children) {
        child.id = initialId++;
        ids.push(child.id)
        objStack.push(child);
        for (let rel of relations) {
          relStack.push({
            ...rel,
            from: child.id
          })
        }
      }
      node.inId = ids;
      node.outId = ids;
      return ids;

      

    }
    else {
      objStack.push(formattedBlock);
      for (let rel of relations) {
        relStack.push({
          ...rel,
          from: formattedBlock.id
        })
      }

      node.inId = [formattedBlock.id];
      node.outId = [formattedBlock.id];
      return formattedBlock.id;
    }
 

  }
  else {
  //  ("unsuported type", node)
  }




  return node._id;

}



function generateCypher(objStack, relStack) {

  let query = "";
  for (let obj of objStack) {

    // CREATE (:Person {id: "100", name: "Daniel", age: 30, city: "London"});
    let props = [];
    for (let key in obj) {
      if (typeof obj[key] == "string") {
        obj[key] = obj[key].replace(/\n/g, " ");
      }
      if (key != "type") {
        props.push(`${key}: "${obj[key]}"`)
      }
    } 
    query += `CREATE (:${obj.type} {${props.join(",")}})
`;
  }

  for (let obj of relStack) {
   // MATCH (u), (v) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
   let rel = obj.type;
   if (rel.indexOf(".")) {
     rel = rel.split(".").pop();
   }
   query += `MATCH (u), (v) WHERE u.id = "${obj.from}" AND v.id = "${obj.to}" CREATE (u)-[:${rel}]->(v);
`;
  }

  console.log(query)
}