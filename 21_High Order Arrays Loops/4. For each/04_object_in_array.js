let array=[
    {
        language:"python",
        symbol:"py"
    },
    {
        language:"java",
        symbol:"jav"
    },
    {
        language:"javascript",
        symbol:"js"
    }
]

array.forEach((item)=>{
    console.log(item)
})
console.log("=====================================")    
array.forEach((item)=>{
    console.log(item.language)
})