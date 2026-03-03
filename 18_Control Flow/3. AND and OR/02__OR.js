let google=true
let email=true
if(google || email){
    console.log("allow to use it.")
}

let useLogedin=true
let debitecard=true
google=false;

if(useLogedin || google){
    console.log("allow to shopping")
}
else{
    console.log("Not allow to shopping")
}