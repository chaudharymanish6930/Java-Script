const num=[1,2,3,4,5,6,7,8,9,10]

// chaining of map method
const new1= num.map((num) => num+10).map((num) => num+20).map((n)=> n-30)
console.log(new1);
// [
//     31, 32, 33, 34, 35,
//     36, 37, 38, 39, 40
//   ]