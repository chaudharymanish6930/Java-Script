const user={
    username:"manish choudhary",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// 1
user.welcomeMessage() // manish choudhary, welcome to website
// 2
user.username="Vishal"

user.welcomeMessage() // Vishal, welcome to website