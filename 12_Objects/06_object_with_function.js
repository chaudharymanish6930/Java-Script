let info={
    name:"rohit sharma",
    age:34,
    email:"superhitsharma@gmail.com"
}

info.greeting=function(){
    console.log("Hello");
}

console.log(info.greeting); // [Function: greeting]
console.log(info.greeting()); // Hello

// Another way to define function inside object
info.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(info.greeting2); // [Function: greeting2]
console.log(info.greeting2()); // hello js user, rohit sharma