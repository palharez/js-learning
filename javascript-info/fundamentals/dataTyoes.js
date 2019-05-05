// no error
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert(1 / 0); // Infinity

alert(Infinity); // Infinity

alert("not a number" + 2); // NaN, such division is erroneous

alert("not a number" + 2 + 5); // NaN

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed ${str}`;

let name = "John";

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

alert("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")

let age = null;

let x;

alert(x); // shows "undefined"

let x = 123;

x = undefined;

alert(x); // "undefined"

typeof undefined; // "undefined"

typeof 0; // "number"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)
