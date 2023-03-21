


@A {
  ::ToA {a:1} ::tag{}


  S1{a:b} ::ToS1{} -->  S2 {c:d} ::ToS2{} --> D {};

  (S3 {a:a} ::ToS3{} -->  S4 {dd:d} ::ToS4{}) ::ToLB{};
}

@B {
  ::ToB {}
  A() --> S5 {} ::ToS5{};
  A() --> S6 {} ::ToS6{} ::tag{};
} 





/*



Rule C() {
  ::ToC{}
  (R1{} ::ToR1{} || R2{} ::ToR2{});
}



Z {} --> :::Limit {
  amount : [5000, =]
} ::A2 {}

==>

Z{} --> 
((
(S1{a:b} ::ToS1{} -->  S2 {c:d} ::ToS2{} --> D())
 ||
( (S3 {a:a} ::ToS3{} -->  S4 {dd:d} ::ToS4{}) ::ToLB{};)
)
|| 
 A() --> S6 {} ::ToS6{}
 )


)
*/