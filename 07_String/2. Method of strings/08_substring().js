const newstring = "Hello, World!";

console.log(newstring.substring(1, 4)); // ell
console.log(newstring.substring(4)); // o, World!
console.log(newstring.substring(-5, )); // negative value is treated as 0
// ignore the negative value