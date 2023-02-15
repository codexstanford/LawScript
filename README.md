# LawScript (DRAFT)

[![](https://dcbadge.vercel.app/api/server/5ByPcEg2)](https://discord.gg/5ByPcEg2)

**LawScript** is currently in development, and may change radically in future versions.

**LawScript** is a generic language to describe any for of law, legal document, regulation or contract in a computable form! The aim of the language are: 
- to stay as close as possible to the legal text that is represented, allowing better auditability of the code.
- ability to represent any legal document.
- trying to describe the what of the legal text, instead of the how it is to be interpreted, like in Logic Programing language.
- making it easily extensible to new legal domain

The contract can then be compile into **LawCodex** an easy to work with and interoperable format that allow representation and exchange of legals texts across computer system.

This project aim at providing a compiler for **LawScript** to **LawCodex**, and a set of tool to work with **LawCodex** files, including : 
- A visualizer of **LawCodex** files
- A solver allowing reasoning on top of **LawCodex** files
- Transpiler allowing conversion of **LawCodex** files to other language / format. We support export to Graph (Cypher) and Scasp as of today. 


# Introduction to **LawScript**

## Key principle

A **LawScript** program can be see as a series of statement to which annotations are attached. When evaluating the program, every statement present in the program are evaluated, and if they are ```TRUE``` then the attached annotation are returned by the solver.

This allow a **LawScript** program to represent the logic of the Legal Text, without having to manage the specifics of the legal domain represented. The **LawCodex** solver is able to resolve which annotation apply to a given set of input. It is then the responsibility of the domain specific implementation to do something with the returned annotations.

## Section

A **LawScript** program is structured into optional named section that match the hierarchy of the legal document it is representing.

Section are declared using the ```section``` keyword and can be nested.

```
section Section1 {
  section Part1{
    // [...]
  }
  section Part2 {
   // [...]
  }
}
```

A statement can reference to a section using the section reference symbol ```§``` or alternatively ```$``` for simplicity.

```
  // This will refer to Section1
  §Section1;
  // This will  refer to Section1 Part1
  $Section1.Part1;
```

## Statement

A **LawScript** program is a series of statements. Every statements in the program are evaluated independently by the solver.

A statement is a logic expression containing conditions and operator finished by a ```;```

```
  // A statement containing a variable. Will be true if the variable is true
  isLegal;

  // A statement containing  a condition, will be true if the operation return true

  X or Y;

```

In **Lawscript** only 5 operator are supported in statements: ```and```, ```or```, ```not```, ```cause``` and ```before```.

### Propositional logic operators (```and```, ```or```, ```not```)

The logic operator ```and```, ```or``` and ```not``` resolve in the following way:

**and** ***,(arity 2)***

| and | true | false | unknown|
|-|-|-|-|
| true | true | false | unknown|
| false| false | false | false |
| unknown| unknown | false | unknown|  

**or** ***,(arity 2)***

| or | true | false | unknown |
|-|-|-|-|
| true | true | true | true |
| false| true | false | unknown |
| unknown| true | unknown | unknown|  

**not** ***, (arity 1)***

|  | true | false | unknown |
|-|-|-|-|
| not | false | true | unknown |

A traditional alternate notation is supported: ```&&```, ```||```, ```!```.

### Flow operator (```cause```, ```before```)

Logic text often use temporal logic, with sometime an expression of causality. **LawScript** support two flow operator to express such logic:
-  the causal operator express with the keyword ```cause``` or the symbol ```-->```, used to describe a causal relation between two facts.
-  the time operator express with the keyword ```before``` or the symbol ```==>``` used to describe a temporal relation between two facts.

```
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
```

For the ```before``` operator **LawScript** support a way to specified date or period using the ```Time {}``` construct.

```
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


```

## Annotation

Annotation are arbitrary pieces of information that are attached to a statement and return by a solver if the instruction they are attached to is ```TRUE```.

Annotation are declared using the ```annotation``` keyword and can contain an hashmap of properties.

```
  annotation Limit {
    amount: 200
  }

  annotation Cancelation

```

The annotation apply to the instruction directly left of it 

```

  (
    Situation {
    event: Fire
    } annotation InCaseOfFire
    or
    Situation {
     event: Flood
    } annotation InCaseOfFlood
  ) annotation InAnyCase

```

Optionally annotation at the begin of a section will attach to the section itself. Section annotation are valid if one of the statement contain in the section is ```TRUE```

```

section Section1 {
  annotation InCaseOfSection1

}

```

### Reserved annotation

The annotation ```Text``` is reserved to describe the legaleese text.

```
  annotation Text {
    value : "Lorem ipsum [...] patapum"
  }
```

The annotation ```Documentation``` is reserved to documentation added to the model

```
  annotation Documentation {
    value: "We decide to model this way because it make sens"
  }
```

## Types and variables

All variables are also type in **LawScript**.  They are declared the following way:
 ```VariableName : VariableType```. The default types are:
 - string
 - number
 - boolean
 - dictionary
 - {}

Assignation are declared the following way ```VariableName = Value``` .

```

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
```

### Types decorator

Type declaration can be decorated with metadata. This allow to embark accessory information into the types. Decorator apply to the things defined left hand, and use the syntaxe ```@key=value```. A decorator value is either a ```string``` or a ```number```

```
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
```

### Dictionaries

Dictionary are similar to traditional enum, but have metadata attached to their values. They are declared using the keyword ```dictionary```

```
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
```

## Include

It is possible to import another file into a **LawScript** program using the keyword ```include```. 

Import support path from local file but also remotely from HTTP address.

If the imported file is of type ```.csv```, import will try to convert the content of the file to a dictionary, using the column ```primaryKey``` as a key, or the first column.

```
  include "path-to-file.ls";

  include "http://example.com/ontology/items"

  include "items.csv"
```

## Range

It is possible to specified a possible range for a numeric value using the ```[ ... ]``` operator. This operator can be used to specified strictly greater / smaller that ```[``` and greater/smaller or equals ```[=```

```

  Situation {
    age: [=21 ... ], // from 21 (included) to infinity,
    height: [122 ... 187=] // from 122 (excluded) to 187 included,
    width: [... 100=] // less or equals to 100
  }

```