//
let x = 1;

x = -x;
alert(x); // -1, unary negation was applied

let x = 1,
  y = 3;
alert(y - x); // 2, binary minus subtracts values

let s = "my" + "string";
alert(s); // mystring

alert("1" + 2); // "12"
alert(2 + "1"); // "21"

alert(2 + 2 + "1"); // "41" and not "221"

alert(2 - "1"); // 1
alert(6 / "2"); // 3

// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

let x = 2 * 2 + 1;

alert(x); // 5

let a, b, c;

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4

alert(5 % 2); // 1 is a remainder of 5 divided by 2
alert(8 % 3); // 2 is a remainder of 8 divided by 3
alert(6 % 3); // 0 is a remainder of 6 divided by 3

alert(2 ** 2); // 4  (2 * 2)
alert(2 ** 3); // 8  (2 * 2 * 2)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

let counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert(counter); // 1

// Bitwise operators
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert(n); // 14

let n = 2;

n *= 3 + 5;

alert(n); // 16  (right part evaluated first, same as n *= 8)

let a = (1 + 2, 3 + 4);

alert(a); // 7 (the result of 3 + 4)

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  // ...
}
