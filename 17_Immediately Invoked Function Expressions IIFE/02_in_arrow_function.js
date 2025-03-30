// 2 way IIFE  in  global scope pollution
(function code(){
    console.log("hello duniya!")
})();

// arrow function
(()=>("manish"))(); // Wow!! one line

// invoked in this arrow
(() => {
    console.log("hello bhai!!")
})()
