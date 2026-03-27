// Look like a for each loop 
const num=[1,2,3,4,5,6,7,8,9,10]
const new1= num.map((n) => n+10)
// return statement is not required here
console.log(new1);

const new2= num.map((num) => {
    num=num+10
    // return num;
})
console.log(new2);  // Undefined in the all cases because it doesn't have return type

const new3= num.map((num) => {
    num=num+10
    return num; 
})
console.log(new3);  // [11,12,13,14,15,16,17,18,19,20]