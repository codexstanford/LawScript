import ohm from 'ohm-js';

/**
 * The Grammar of PLIL (name pending)
 * Can be test with:
 * https://ohmjs.org/editor/
 * 
 * This should be a copy of the content of the grammar.ohm file in the grammar directory
 * 
 * We need to use Sting.raw to prevent line break to broke the grammar parser (Ohm requirement)
 */
const grammar = String.raw`
IPDL {
  program = (comment | spaceoreol | declaration | rule | annotation)+

  comment = comment_inline | comment_block
  comment_inline = spaces comment_inline_signal comment_line eol
  comment_inline_signal = ("//" | "#")

  comment_line = (~eol any)+
  comment_block = comment_open comment_content comment_close
  comment_open = "/*"
  comment_close = "*/"
  comment_content = (~comment_close any)+
  
  declaration = declaration_type blank (block | declaration_name)  blank ";"
  declaration_type = word
  declaration_name = word
  
  rule = rule_type blank rule_name blank "()" blank "{" blank rule_content blank "}"
  rule_type = "Rule" | "Chain"

  rule_content =  rule_content_flat_a rule_content_flat_b*
  
  rule_name = word

  rule_content_flat_a = blank annotation* blank rule_content_flat_c blank annotation* blank
  rule_content_flat_b = rule_content_operator blank rule_content_flat_a
  rule_content_flat_c = rule_call | block | logic_block
  rule_content_operator = causal_operator | or

  logic_block = "(" blank rule_content blank")"
  
  causal_operator = "<--"
  or = "||"
  
  block = block_name blank "{" blank block_content? blank "}"
  block_name = word
 
  block_content = property (blank "," blank property)*
  
  property = property_name blank ":" blank property_value 
  property_name = word
  property_value = expression | string | number | variable | property_object | property_list
  
  property_list = blank "[" blank list_item (blank "," blank list_item)* blank "]" blank

  list_item = string | number | variable | property_object
 
  expression = value (blank or blank value)+
  variable = word sub_variable*
  sub_variable = "." word
  property_object = "{" blank block_content blank "}"
  
 
 
  annotation = "::" block blank
 
  
  value = string | number | variable 
  
  rule_call = rule_name blank "(" blank ")"
  
  string = "\"" string_content "\""
  string_content = (~"\"" any)*
   
  number = (number_traditional_notation | number_dot_notation)
  number_traditional_notation = number_beforedot number_afterdot?
  number_dot_notation = number_afterdot
  number_beforedot = digit+
  number_afterdot = "." digit+ 
    
  word = letter (alnum)*
  blank = spaceoreol* 
  spaceoreol = (space | "\n" | "\r" | comment)
  eol = ~" " (space | end)  
 
}
`;

/**
 * We pre load the grammar once so multiple call for parse are faster
 */
const myGrammar = ohm.grammar(grammar);

/**
 * Parse a program 'file' against the grammar to build an AST
 * @param {*} fileContent 
 */
export default function parseFileContentWithGrammar(fileContent) {

  const matchResult = myGrammar.match(fileContent);


  if (matchResult.succeeded()) {
    console.log('Parsing succeed');
  } else {
    console.log(`Parsing error`, matchResult.message);
    throw("");
  } 
  return matchResult;
}
