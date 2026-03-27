//  IIFE  in  global scope pollution
// problem occurs when we have to write a code in global scope and it may cause pollution in global scope. To avoid this we can use IIFE in arrow function.

(function code(){
    console.log("hello duniya!")
})();

// arrow function
(()=>console.log("manish"))(); // Wow!! one line

// invoked in this arrow
(() => {
    console.log("hello bhai!!")
})()
