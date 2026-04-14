// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)
const descriptor =Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const mynew =Object.create(null)

const chai = {
    name:"ginger chai",
    price:250,
    isAviable : true
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"price", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
         console.log(`${key} :${value}`)
    }
    // console.log(`${key} :${value}`)
}