const num=[1,22,3,44,5,96,70,8,9,10]

const new1= num.map((num) => num+10).map((num) => num+20).filter((num) => num>= 40)
console.log(new1);
// [
//     31, 32, 33, 34, 35,
//     36, 37, 38, 39, 40
//   ]