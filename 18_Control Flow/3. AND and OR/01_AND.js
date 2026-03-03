let useLogedin=true
let debitecard=true
let google=false;
if(useLogedin && debitecard){
    console.log("allow to shopping")
}
else{
    console.log("Not allow to shopping")
}

if(useLogedin && debitecard && google){
    console.log("allow to shopping")
}
else{
    console.log("Not allow to shopping")
}
