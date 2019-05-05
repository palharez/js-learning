while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}

do {
  // loop body
} while (condition);

let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

for (begin; condition; step) {
  // ... loop body ...
}

for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0;
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// ...finish, because now i == 3

for (;;) {
  // repeats without limits
}

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break; // (*)

  sum += value;
}
alert("Sum: " + sum);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // what if I want to exit from here to Done (below)?
  }
}

alert("Done!");
