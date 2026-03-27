function one(){
    console.log(this)
}
// more important
one()

function two(){
    let username="manish"
    console.log(this)
    console.log(`${this.username}`)
}
// more important
two() // same output as a previous
