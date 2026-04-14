function SetUsername(username){
    this.username=username;
    console.log("Called")
}

function CreateUser(username, email, password){
    SetUsername.call(this,username)
    this.email=email;
    this.password=password;
}

const chai=new CreateUser("Manish","me.jaat@gmail.com","234");
console.log(chai)