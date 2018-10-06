// Operators

// Arithmetic, Assignment, Comparison, Logical, Bitwise.

// Arithmetic

let x = 30;
let y = 10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
// INcrement
console.log(++x);
console.log(x++);
// decreent
console.log(--x);

// Assignment

let a = 10;
a += 5;
a *= 3;
a /= 3;

// comparison

let b = 15;
console.log( b > 0);
console.log( b >= 0);
// <,<=,
console.log(b === 15);
console.log(b !== 15);

// Equality OPerators
// === strict equality operator check both type and value
// == loose equality oper check value, convert type to match right side val
console.log(1===1);
console.log('1'===1);
console.log('1' == 1);

// Ternary
let points = 100;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

// logical operators

// And, Or, not
// &&,||,!
console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false | false);
console.log(false || 1 || 2);

// Operator precedence
let x = 10 + 3 * 4;

