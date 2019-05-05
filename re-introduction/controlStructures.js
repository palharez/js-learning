let name = "kittens";
if (name == "puppies") {
  name += " woof";
} else if (name == "kittens") {
  name += " meow";
} else {
  name += "!";
}
name == "kittens meow";

while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));

for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}

for (let value of array) {
  // do something with value
}

for (let property in object) {
  // do something with object property
}

let name = o && o.getName();

let name = cachedName || (cachedName = getName());

let allowed = age > 18 ? "yes" : "no";

switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}

switch (a) {
  case 1: // fallthrough
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}

switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
