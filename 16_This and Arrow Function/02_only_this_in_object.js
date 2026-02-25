const user={
    username:"manish choudhary",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    // output
    //     manish choudhary, welcome to website
    // {
    //   username: 'manish choudhary',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }
    // rohit, welcome to website
    // {
    //   username: 'rohit',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }
}
// 1
user.welcomeMessage()
// 2
user.username="rohit"
user.welcomeMessage()

// in global variable in this funcctions
console.log(this)  /// {}
