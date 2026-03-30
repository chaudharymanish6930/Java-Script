// 1  return a list
const num=[1,20,35,4,58,4,3,68,2,10]
const num1=num.filter((num)=> num>4)
console.log(num1);

// 2 return used in the case of Scopes
const num2=[1,23,54,5,66,554,3]
const num3=num2.filter((num3)=>{
    // return num3>5
})
console.log(num3)

const num4=num2.filter((num3)=>{
    return num3>5
})
console.log(num4)