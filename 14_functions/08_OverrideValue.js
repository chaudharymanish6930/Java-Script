function login(username="mohit"){
    if(username === ""){
        return "Please enter a valid username"
    }
    return `${username} just log in`
}

console.log(login()) // mohit just log in by default value
console.log(login("Manish")); // Manish just log in
// override thevalue of the username