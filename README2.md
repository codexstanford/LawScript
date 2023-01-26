
# Introduction to **LawScript**

## Key principle

A **LawScript** program can be see as a series of statement to which annotations are attached. When evaluating the program, every statement present in the program are evaluated, and if they are ```TRUE``` then the attached annotation are returned by the solver.

This allow **LawScript** to represent the logic of the Legal Text, without having to manage the specifics of the legal domain represented.The **LawCodex** solver is able to resolve which annotation apply to a given set of input. It is then the responsibility of the domain specific implementation to do something with the returned annotations.

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

  cause

  Situation {
    event: Damage
  };


  // A damage happening after a policy purchase

  Situation {
    event: PolicyPurchase
  }

  before

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
    value : "
  }
```

