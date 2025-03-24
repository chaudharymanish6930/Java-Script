let a=[1,2,3,[9,8,7,6],4,5,[10,11,12]];
const b=a.flat(Infinity);   // flat() method is used to convert complex array into simple array
console.log(b);
// [1, 2, 3, 9, 8, 7, 6, 4, 5, 10, 11, 12]