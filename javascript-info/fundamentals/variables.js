// Variables

let message;

message = "Hello"; // store the string

alert(message); // shows the variable content

let message = "Hello!"; // define the variable and assign the value

alert(message); // Hello!

let user = "John",
  age = 25,
  message = "Hello";

("use strict");

num = 5; // error: num is not defined

// Constants
const myBirthday = "18.04.1982";

myBirthday = "01.01.2001"; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Summary
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.

// Tasks
let admin, name;

name = "John";
admin = name;

alert(admin);

let ourPlanetName = "Earth";

let currentUserName = "John";
