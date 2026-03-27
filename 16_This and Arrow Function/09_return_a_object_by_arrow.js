const two=()=> {username:"Manish_Choudhary"}
console.log(two(7,6))
// undefined
// return is required in "{}" in arrow function, otherwise it will return undefined

const one=()=> ({username:"Manish_Choudhary"})
console.log(one(7,6))
//  {username:"Manish_Choudhary"}