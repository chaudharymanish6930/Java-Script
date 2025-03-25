function arrayinFunction(getarray) {
    return getarray[2];
}
// //  first make the array

let myarray=[11,22,33,44,55]
console.log(arrayinFunction(myarray)); // 33

// direct passes the values to the function
console.log(arrayinFunction([1,2,3,4,5])); // 3