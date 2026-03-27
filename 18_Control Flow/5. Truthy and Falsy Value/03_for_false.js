0 == "" // true
console.log(false == 0) // true
console.log(false == "") // true
console.log(0 == "") // true

// but
console.log(false === 0) // false
console.log(false === "") // false
console.log(0 === "") // false

if(0){
    console.log("Hello,shivam")
}

if(''){
    console.log("false")
}

if(null){
    console.log("Function")
}

if(-0){
    console.log("Hello,shivam")
}
// marks
if(!BigInt){
    console.log("false---")
}

if(NaN){
    console.log("Function")
}

if(undefined){
    console.log("faoseee")
}