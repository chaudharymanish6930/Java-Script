let mytimestamp = Date.now();   
console.log(mytimestamp);   //  in mili-second

let mycreatedDate = new Date("01-04-2023");

console.log(mycreatedDate.getTime());  // in mili-second

console.log(Date.now()/1000)

console.log(Math.floor(Date.now()/1000))