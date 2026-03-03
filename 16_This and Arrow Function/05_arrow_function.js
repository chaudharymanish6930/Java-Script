//  Arrow function...  () => {}
const one= ()=>{
    let username="rohit"
    console.log(this) // {}
}

one()

const two=()=>{
    let username="rohit"
    console.log(this.username)  // undefined
}
two() // undefined