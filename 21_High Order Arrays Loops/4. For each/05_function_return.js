const coding=["js","python","java","rubby"]
// forEach does not return anything 
const value= coding.forEach((item)=>{
    console.log(item)
    return item
})

console.log(value) // undefined