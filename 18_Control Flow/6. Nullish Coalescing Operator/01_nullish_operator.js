let val1=5??10
console.log(val1)  // 5

let val2 = null ?? 10
console.log(val2)  // 10

let val3= undefined ?? 20
console.log(val3)   // 20

let val4 = null ?? 10 ?? 20
console.log(val4)   // 10

let val5 = undefined ?? null
console.log(val5)   // null