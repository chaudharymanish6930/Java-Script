console.log(5 != "5");  // false (type conversion happens, 5 == 5)
console.log(0 != false); // false (false is converted to 0)

console.log(5 !== "5");  // true (different types)
console.log(0 !== false); // true (number vs boolean)
