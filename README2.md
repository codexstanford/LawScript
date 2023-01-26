
# Introduction to **LawScript**

## Key principle

A **LawScript** program can be see as a series of statement to which annotations are attached. When evaluating the program, every statement present in the program are evaluated, and if they are ```TRUE``` then the attached annotation are returned by the solver.

This allow **LawScript** to represent the logic of the Legal Text, without having to manage the specifics of the legal domain represented.The **LawCodex** solver is able to resolve which annotation apply to a given set of input. It is then the responsibility of the domain specific implementation to do something with the returned annotations.

## Annotation

Annotation are arbitrary pieces of information that are attached to a statement and return by a solver if the statement they are attached to is ```TRUE```.



## Section

A **LawScript** program is structured into optional named section that match the hierarchy of the legal document it is representing.

Section are declared using the ```@``` symbol and can be nested.

```
@Section1 {
  @Part1{
    // [...]
  }
  @Part2 {
   // [...]
  }
}
```

A statement can reference to a section using the section reference symbol ```§``` or a traditional call notation ```()```.

```
  // This will refer to Section1
  §Section1;
  // This will  refer to Section1 Part1
  Section1.Part1();
```