
// SETTING REGULAR EXPRESSION
var regExp = /abc/gi; // /pattern/flags(modifiers) -> flags: "g" = global match; "i" = case-insensitive matching; "m" = multiline matching
var regExp2 = new RegExp('abc', 'g'); //RegExp('pattern', 'flags')

var text = 'ABc is a string';

// MATCH REGEXP
console.log(regExp.exec(text)); // return ["ABc", index: 0, input: "ABc is a string", groups: undefined]
console.log(text.match(regExp));  // return ["ABc"]

// TEST - true or false
console.log(regExp.test(text)); // return true

//REPLACE regExp  
console.log(text.replace(regExp, 'XYZ')); //  'ABc is a string' -> 'XYZ is a string'

// SPLIT a string where regExp was finded deleting regExp
console.log(text.split(regExp));  //return ["", " is a string"]
console.log(text.split(/i/g));  //return ["ABc ", "s a str", "ng"] 


//METACHARACTERS
  // Anchors   ^ and $
  /^startsWith/
  /endsWith$/
  /^exactStringMatch$/

  // matches special signs like "." "?" "+" "*" potting befor them  a backslash  "\"
  "is it match a question sign?".match(/\?/); // return ["?", index: 27, input: "is it match a question sign?", groups: undefined]
  /\./.exec("check matching a dot sign.");  // [".", index: 25, input: "check matching a dot sign.", groups: undefined]
  /\\/.exec("check matching a \sign.");

  // [] - matching single letters, signs ect.
  [abc] // letters "a" "b" "c" but just lowercase
  [a-c] // from "a to "c
  [0-9] // numbers form 0 to 9
  [a-fA-F0-9] // a single hexadecimal digit, case insensitively
  [^a-z]  // a string that has not a letter from a to z // "^" is used as negation of the expression
  [a-z]{2,4}  // strings with letters a-z, minimum 2 leters and max 4 letter
  [a-z]{2}  // strings with letters a-z contains exactly 2 leters
  [a-z]{2,} // strings with letters a-z contains minimum 2 leters

// https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
// https://regex101.com/
// https://hackernoon.com/guide-for-regular-expressions-in-js-2a33620ca1cf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
