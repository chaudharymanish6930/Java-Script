let x = 10;      // x is a number
x = "Manish";    // now x is a string
x = true;        // now x is a boolean

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id,anotherid)
console.log(id===anotherid)   // false
console.log(id == anotherid)

let bigint= 1234562n
console.log(bigint);
console.log(typeof bigint); 