const array=[
    {
        item:"java",
        price:3999
    },
    {
        item:"js",
        price:2999
    },
    {
        item:"python",
        price:2998
    },
    {
        item:"web developer",
        price:8999
    }
]

const add=array.reduce((acc, item) => acc + item.price,0)
console.log(add)