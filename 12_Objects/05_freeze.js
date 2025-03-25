let info={
    name:"rohit sharma",
    age:34,
    email:"superhitsharma@gmail.com"
}

Object.freeze(info);
info.name="virat kohli";
console.log(info); 
// { 
// name: 'rohit sharma',
//  age: 34,
//  email:"superhitsharma@gmail.com"
// }