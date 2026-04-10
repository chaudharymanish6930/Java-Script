// 1.
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an Async task
//     // DB calls, cryptography, network
//     setTimeout(()=>{
//         console.log("Task is Completed");
//     },2000);
// })
// promiseOne.then(function(){
//     console.log("now free");
// })

2.
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Task is Completed");
        resolve();
    },2000);
})
promiseTwo.then(function(){
    console.log("now free");
})

3.
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Task is Completed");
        resolve();
    },2000);
}).then(function(){
    console.log("Seccond Done");
})

 4.
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({"Name":"Manish","class":"12th"});
    },2000);
})
promiseThree.then((user)=>{
    console.log(user);
})


// 5.
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         const error=true;
//     if(!error){
//         resolve({Name:"Manish",class:"12th"});
//     }
//     else{
//         reject('Error: Something went Wrong');
//     }
//     },2000)
// })

// const username=promiseFour.then((user)=>{
// console.log(username)
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.Name;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected ");
// })

// 6.
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         const error=true;
//     if(!error){
//         resolve({Name:"JavaScript",password:"1234"});
//     }
//     else{
//         reject('Error: JS went Wrong');
//     }
//     },2000)
// })
// async function consumePromiseFive(){
//     const response =await promiseFive
//     console.log(response)
// }
// consumePromiseFive(); // in this case error occurs
// This error originated either by throwing inside of an async function without a catch block,
//  or by rejecting a promise which was not handled with .catch().

// 7.
// const promiseSix = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//     const error=false;
//     if(!error){
//         resolve({Name:"JavaScript",password:"1234"});
//     }
//     else{
//         reject('Error: JS went Wrong');
//     }
//     },2000)
// })
// async function consumePromiseSix(){
//     const response =await promiseSix
//     console.log(response)
// }
// consumePromiseSix(); // now not an error occured 

// 8.
// const promiseSix = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         const error=false;
//     if(!error){
//         resolve({Name:"JavaScript",password:"1234"});
//     }
//     else{
//         reject('Error: JS went Wrong');
//     }
//     },2000)
// })
// async function consumePromiseSix(){
//     try{
//         const response =await promiseSix
//     console.log(response)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseSix();

// 9.
// async function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data =response.json();
//         console.log(data);
// }
// getAllUsers();  Promise { <pending> }

// 10.
// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         console.log(response);  // wrong format
//         // const data =response.json();  it will take time to fetch the data
//         // console.log(data);
//         const data = await response.json();
//         console.log(data); 
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})