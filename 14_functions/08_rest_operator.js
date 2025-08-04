<<<<<<< HEAD
// 1
function calcluateprice(num1){
    return num1
}
console.log(calcluateprice(100, 200, 300 )) // 100

// 2
function calcluateprices(...num1){
    return num1
}
console.log(calcluateprices(100, 200, 300 )) // [ 100, 200, 300 ]

// 3  
function calculate(var1,var2,...num1){
    // return var2  // 200
    return num1
}
=======
// 1
function calcluateprice(num1){
    return num1
}
console.log(calcluateprice(100, 200, 300 )) // 100

// 2
function calcluateprices(...num1){
    return num1
}
console.log(calcluateprices(100, 200, 300 )) // [ 100, 200, 300 ]

// 3  
function calculate(var1,var2,...num1){
    // return var2  // 200
    return num1
}
>>>>>>> 5c3f3ff (first)
console.log(calculate(100, 200, 300, 400, 500)) // [ 300, 400, 500 ]