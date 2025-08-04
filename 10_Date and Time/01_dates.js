<<<<<<< HEAD
//   dates
let mydate=new Date();
console.log(mydate);
console.log(typeof mydate); // output: object

console.log(mydate.toString()); // output: Wed Sep 08 2021 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());  // output: Wed Sep 08 2021
console.log(mydate.toTimeString());  // output: 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString());  // output: 9/8/2021
console.log(mydate.toLocaleString());  // output: 9/8/2021, 12:00:00 PM
console.log(mydate.toLocaleTimeString());  // output: 12:00:00 PM
console.log(mydate.toJSON()); // output: 2021-09-08T06:30:00.000Z
console.log(mydate.toUTCString());  // output: Wed, 08 Sep 2021 06:30:00 GMT
=======
//   dates
let mydate=new Date();
console.log(mydate);
console.log(typeof mydate); // output: object

console.log(mydate.toString()); // output: Wed Sep 08 2021 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());  // output: Wed Sep 08 2021
console.log(mydate.toTimeString());  // output: 12:00:00 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString());  // output: 9/8/2021
console.log(mydate.toLocaleString());  // output: 9/8/2021, 12:00:00 PM
console.log(mydate.toLocaleTimeString());  // output: 12:00:00 PM
console.log(mydate.toJSON()); // output: 2021-09-08T06:30:00.000Z
console.log(mydate.toUTCString());  // output: Wed, 08 Sep 2021 06:30:00 GMT
>>>>>>> 5c3f3ff (first)
console.log(mydate.toISOString());  // output: 2021-09-08T06:30:00.000Z