const num=[9,7,3]

const mytotal =num.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc +currval
},0)
console.log(mytotal)

// by arrow function
const mytotal1=num.reduce((acc, currval) => acc + currval,0)
console.log(mytotal1)
// output
// acc: 0 and currval: 9
// acc: 9 and currval: 7
// acc: 16 and currval: 3
// 19
// 19