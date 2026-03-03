function one(){
    let username="manish"
    console.log(this.username)
    // undefined
}
// more important works in the object
one()

const user= function(){
    let username="manish"
    console.log(this.username)
    // undefined
}
user() // undefined