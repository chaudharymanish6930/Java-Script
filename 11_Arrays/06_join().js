const myarr=[1,2,3,4,5];
console.log(myarr)
console.log(typeof myarr)  // object
console.log(myarr.join()); // 1,2,3,4,5

let Newarr=myarr.join('')
console.log(Newarr)  // 12345
console.log(typeof Newarr)

console.log(myarr.join('')); // 12345
console.log(myarr.join('-')); // 1-2-3-4-5
// its convert into string and join with the given separator

// if separator is not given then it will join with comma(,)