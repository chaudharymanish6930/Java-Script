const names = {
  firstName: 'John',
  age:20,
  from: 'India'
}

//accessing all keys and values
console.log(Object.keys(names)); // [ 'firstName', 'age', 'from' ]
console.log(Object.values(names)); // [ 'John', 20, 'India' ]
console.log(Object.entries(names)); // [ [ 'firstName', 'John' ], [ 'age', 20 ], [ 'from', 'India' ] ]

console.log(names.hasOwnProperty('Name'));   // true

console.log(names.hasOwnProperty('from'));   // true