console.log(one(19)) // it is also correct  20
function one(a){
    return a+1
}
console.log(one(4))  // its is  correct  5

// now interesting...
// two()  it is not allowed
const two =function(num){
    return num +2
}
two()