// 1 way
function chai(){
    console.log("helo world!")
}
chai();
// HERE... it is important to line terminates " ; "

// 2 way IIFE  in  global scope pollution
(function code(){
    console.log("hello duniya!")
})()