<<<<<<< HEAD
function pass(username){
    if(username === ""){
        return "Please enter a valid username"
    }
    return `${username} just log in`     
}

console.log(pass("Manish")) // Manish just log in

function passes(username="aman"){
    if(username === ""){ // not enter in this condition
        return "Please enter a valid username"
    }
    return `${username} just log in`     
}

=======
function pass(username){
    if(username === ""){
        return "Please enter a valid username"
    }
    return `${username} just log in`     
}

console.log(pass("Manish")) // Manish just log in

function passes(username="aman"){
    if(username === ""){ // not enter in this condition
        return "Please enter a valid username"
    }
    return `${username} just log in`     
}

>>>>>>> 5c3f3ff (first)
console.log(passes("Manish")) // Manish just log in