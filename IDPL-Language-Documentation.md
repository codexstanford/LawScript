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