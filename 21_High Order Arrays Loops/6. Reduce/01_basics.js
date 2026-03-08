const num=[1,2,3]

const mytotal =num.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc +currval
},0)
console.log(mytotal)

// by arrow function
const mytotal1=num.reduce((acc, currval) => acc + currval,0)
console.log(mytotal1)
// output
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6
