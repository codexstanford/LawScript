# IDPL Language documentation

## Comments

It is possible to add comment to your pIPDL program using the //, /* */ and # syntaxes

```
  # a line comment
  // an other line comment
  /*
    a block comment
  */
```

## Chain

A chain of situation is express using the following syntaxe:

```
  Chain chainName() {
  
    // Chain content

  }

```

# Rule

A rule act like a macro and can be used in other rule chain when calling it "RuleName()"

Note: This is not a function and does not take arguments
```
// declaration
Rule ruleName() {

  // call
  anotherRuleName()
}

```

# Annotation

Annotation are data object that are used to annotate the code. If a branch of the code is evaluated as true, all the attached annotation are 'returned'

They are express with the block Syntax, and have a block name prefixed by "::"

```

  ::AnnotationName {
    propertyName: value,
    property2 : value2
  }

```



## Causal operator

A chain is generaly a suit of things connected by a causal operator "<--". The causal operator denote that the left hand operands is the cause that made the right hand operand happen.

```
  Chain test() {

    Situation {
      event: "Earthquake" 
    }
    <--
    Situation {
      event: "Damage"
    }
  }
```

## SubChain and chain logic
A Chain can contain a combination of sub chain

```
  A{} <--
    B{} 
    || 
    C{} 
    ||
    (D{} <- E{}) 
  <--
  F{}
```

## Block

A block is an named "object" with a set of key-value

```
BlockName {
  key: propertyValue
}
```

## Property Value

value of a key property in a object or block support the following format:
- boolean
- number
- string
- variable
- object
- list
- logical expression
- mathematical operation


## logical expression

A logical expression is :

```
  property: !expressionOperand || expressionOperand
```

Support the operaotr OR (||) and the unary operator not (!)

## mathematical operation

a mathematical operation betwen number and variable
support : 
- () : parenthesis prioritization
- + : addition
- - : substraction
- * : multiplication
- / : division
- %of : X percent of Y
- ^ : exponent


## chain operator Wildcard

```
  A <-- * <-- B
```

## chain operator Not

```
A <-- !B <-- C
```


## chain matching

```
  S{} <-- B <-- C || Previous:S{event:!Nulear}
```

Supported matching methods are:
- Previous : match all previous blocks in the causal chain of the same type
- Next: match all next block sin the causal chain of the same type
- Precedent: Match all block of the same type that precede the current stage in the causal chain
- Follow: Match all block of the same type that follow the current stage in the causal chain

## Number typing

All number or variable representing number should be typed.


We use a type system with: DimensionName.TypeName, which allow correct arithmetic.

```
  <Distance.meter> sizeOfVehicle

```