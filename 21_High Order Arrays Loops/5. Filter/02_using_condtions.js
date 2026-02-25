const mynum=[1,2,33,56,3,758,84]
const new1 = []
mynum.forEach( (num) => {
    if ( num>4) {
        new1.push(num)
    }
})
console.log(new1);