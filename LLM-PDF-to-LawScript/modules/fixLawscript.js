

const fs = require('fs');
const prompt = require('../utils/prompt.js')
const execSync = require('child_process').execSync;

const INTERPRETER_PATH = `${__dirname}/../../interpreter/index.js`;

async function fixLawScript(snippets, outDir=null) {
  if (!fs.existsSync(`${outDir}/fixLawScript`)) {
    fs.mkdirSync(`${outDir}/fixLawScript`);
  }


  const logic = [];
  for (let [index, snippet] of snippets.entries()) {
    const pageCachePath = `${outDir}/fixLawScript/snippet-${(index + "").padStart(5, '0')}.ls`;
    if (fs.existsSync(pageCachePath)) {
      logic.push(fs.readFileSync(pageCachePath, 'utf8'));
      fs.writeFileSync(pageCachePath+'.full', logic.join('\n\n'), 'utf8');
      continue;
    }

    let error = await testForError(index, outDir)
    let previousCode =  fs.readFileSync(`${outDir}/toLawScript/snippet-${(index + "").padStart(5, '0')}.ls`,'utf8');
    if (error) {
      console.log('[[[', error, ']]]')
      let ls = await updateError(index, error,previousCode, outDir);
      logic.push(ls);
      fs.writeFileSync(pageCachePath, ls ,'utf8');
    }
    else {
      fs.writeFileSync(pageCachePath, previousCode ,'utf8');
    }
  }
}

async function testForError(index, outDir) {


  let ErrorLog = null;
  try {
    execSync(`node ${INTERPRETER_PATH} ${outDir}/toLawScript/snippet-${(index + "").padStart(5, '0')}.ls`);
  }
  catch (err) {
    let lines = err.toString();
    lines = lines.split('\n');
    let correctError = [];
    let save = false;
    for (let line of lines) {
      if (line.indexOf("Error: Parsing") == 0) {
        save = true;
      }
      if (save) {
        correctError.push(line);
      }
      if (line.indexOf("Expected") == 0) {
        break;
      }
    }
    ErrorLog = correctError.join('\n')
  }
  
  return ErrorLog;
}
async function updateError(index, error,previousCode, outDir) {

  let snippet =  fs.readFileSync(`${outDir}/markdownToSnippets/snippet-${(index + "").padStart(5, '0')}.md`,'utf8');

  let samples = [
    {"role": "system", "content": `You are task to model a legal text into a lawscript program.

Here is how lawscript work:Section
A LawScript program is structured into optional named section that match the hierarchy of the legal document it is representing.

Section are declared using the section keyword and can be nested.

section Section1 {
  section Part1{
    // [...]
  }
  section Part2 {
   // [...]
  }
}
A statement can reference to a section using the section reference symbol § or alternatively $ for simplicity.

  // This will refer to Section1
  §Section1;
  // This will  refer to Section1 Part1
  $Section1.Part1;
Statement
A LawScript program is a series of statements. Every statements in the program are evaluated independently by the solver.

A statement is a logic expression containing conditions and operator finished by a ;

  // A statement containing a variable. Will be true if the variable is true
  isLegal;

  // A statement containing  a condition, will be true if the operation return true

  X or Y;

In Lawscript only 5 operator are supported in statements: and, or, not, cause and before.

Propositional logic operators (and, or, not)
The logic operator and, or and not resolve in the following way:

and ,(arity 2)

and	true	false	unknown
true	true	false	unknown
false	false	false	false
unknown	unknown	false	unknown
or ,(arity 2)

or	true	false	unknown
true	true	true	true
false	true	false	unknown
unknown	true	unknown	unknown
not , (arity 1)

true	false	unknown
not	false	true	unknown
A traditional alternate notation is supported: &&, ||, !.

Flow operator (cause, before)
Logic text often use temporal logic, with sometime an expression of causality. LawScript support two flow operator to express such logic:

the causal operator express with the keyword cause or the symbol -->, used to describe a causal relation between two facts.
the time operator express with the keyword before or the symbol ==> used to describe a temporal relation between two facts.
the time on operator express with the keyword on used to describe a moment in time.
  // A damage due to fire
  Situation {
    event: Fire
  }

  -->

  Situation {
    event: Damage
  };


  // A damage happening after a policy purchase

  Situation {
    event: PolicyPurchase
  }

  ==>

  Situation {
    event: Damage
  }
For the before operator LawScript support a way to specified date or period using the Time {} construct.

  // A Fire before 2025 and after 3 month of renovations.

  Situation {
    event: Renovation
  }

  before

  Time {
    period: 3 * Time.month
  }

  before

  Situation {
    event: Fire
  }

  before

  Time {
    date: "01-01-2025"
  }


Annotation
Annotation are arbitrary pieces of information that are attached to a statement and return by a solver if the instruction they are attached to is TRUE.

Annotation are declared using the annotation keyword and can contain an hashmap of properties.

  annotation Limit {
    amount: 200
  }

  annotation Cancelation

The annotation apply to the instruction directly left of it


  (
    Situation {
    event: Fire
    } annotation InCaseOfFire
    or
    Situation {
     event: Flood
    } annotation InCaseOfFlood
  ) annotation InAnyCase

Optionally annotation at the begin of a section will attach to the section itself. Section annotation are valid if one of the statement contain in the section is TRUE


section Section1 {
  annotation InCaseOfSection1

}

Reserved annotation
The annotation Text is reserved to describe the legaleese text.

  annotation Text {
    value : "Lorem ipsum [...] patapum"
  }
The annotation Documentation is reserved to documentation added to the model

  annotation Documentation {
    value: "We decide to model this way because it make sens"
  }
Types and variables
All variables are also type in LawScript. They are declared the following way: VariableName : VariableType. The default types are:

string
number
boolean
dictionary
{}
Assignation are declared the following way VariableName = Value .


  Situation : {
    event: string
  };

  Location: {
    address: string,
    latitude: number,
    longitude: number,
    visited: boolean
  };

  Venue: {
    location: Location
  };

  ConcertVenue : Venue;

  // Set ConcertVenue address to "8 Madison Square Garden"
  ConcertVenue.address = "8 Madison Square Garden";

  // Set all Location visited property to false. (including ConcertVenue.location.visited)
  Location.visited = false;
Types decorator
Type declaration can be decorated with metadata. This allow to embark accessory information into the types. Decorator apply to the things defined left hand, and use the syntaxe @key=value. A decorator value is either a string or a number

Policy : {
  isSigned: boolean
    @ask="Is the policy signed" 
    @displayName="Policy signed" 
    @documentation="A boolean to represent if the policy is payed"
    @priority=1,
  isPremiumPayed: boolean 
    @ask="Is the policy premium payed" 
    @displayName="Premium payed" 
    @documentation="A boolean to represent if a policy is payed"
    @priority=22,
  isCanceled: boolean 
    @ask="Is the policy canceled" 
    @displayName="Policy canceled" 
    @documentation="A boolean to represent if a policy is cancelled"
    @priority=42,
} @documentation="An object that represent a policy";
Dictionaries
Dictionary are similar to traditional enum, but have metadata attached to their values. They are declared using the keyword dictionary

dictionary Country {
  AFG: {
    displayName : "Afghanistan", 
    alpha2: "AF",
    alpha3: "AFG",
    numeric: "004"
    },
  ALB: {
    displayName: "Albania",
    alpha2: "AL",
    alpha3: "ALB",
    numeric: "008"
  },
  DZA: {
    displayName: "Algeria",
    alpha2: "DZ",
    alpha3: "DZA",
    numeric: "012"
  },
  ASM: {
    displayName: "American Samoa",
    alpha2: "AS",
    alpha3: "ASM",
    numeric: "016"
  },
 // [...]
}
Include
It is possible to import another file into a LawScript program using the keyword include.

Import support path from local file but also remotely from HTTP address.

If the imported file is of type .csv, import will try to convert the content of the file to a dictionary, using the column primaryKey as a key, or the first column.

  include "path-to-file.ls";

  include "http://example.com/ontology/items"

  include "items.csv"
Range
It is possible to specified a possible range for a numeric value using the [ ... ] operator. This operator can be used to specified strictly greater / smaller that [ and greater/smaller or equals [=


  Situation {
    age: [=21 ... ], // from 21 (included) to infinity,
    height: [122 ... 187=] // from 122 (excluded) to 187 included,
    width: [... 100=] // less or equals to 100
  }

Alternatively, a shorthand notation is supported for range: [operator value] .

Situation  {
  age: [> 20 year],
  height : [<= 200 cm],
  width: [< 100 kg],
  head: [>= 12 eye]
};
Object properties arythmic
Object property can contain mathematical expression.

The following mathematical operator are supported: +, -, *, /, %of, ||, ^, &&, ||.

The following unary operator is supported : !

It is possible to embed in a mathematical expression a ternary operation: (isTrue) ? true : false

  Situation {

    age: 5 * 3 + 2,
    isDrunk: alcoholInBlood > 0.5 ? true : false

  }

`},

      {"role": "user", "content": `Here is legal text to model the same way, only output the Lawscript:
${snippet}

LawScript:
`},

  {"role": "assistant", "content": previousCode},


  {"role": "user", "content" : `The code you generate throw the following error when I try to compile it. Can you fix it and regenerate it? The error:
${error}

LawScript:
`}
    ]

  let LawScript = await prompt(samples);
   
  return LawScript.answer;

}


module.exports = fixLawScript;
