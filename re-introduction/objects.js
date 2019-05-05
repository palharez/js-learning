let obj = new Object();

let obj = {};

let obj = {
  name: "Carrot",
  for: "Max", // 'for' is a reserved word, use '_for' instead.
  details: {
    color: "orange",
    size: 12
  }
};

obj.details.color; // orange
obj["details"]["size"]; // 12

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person("You", 24);
// We are creating a new person named "You" aged 24.

// dot notation
obj.name = "Simon";
var name = obj.name;

// bracket notation
obj["name"] = "Simon";
var name = obj["name"];
// can use a variable to define a key
var user = prompt("what is your key?");
obj[user] = prompt("what is its value?");

obj.for = "Simon"; // Syntax error, because 'for' is a reserved word
obj["for"] = "Simon"; // works fines
