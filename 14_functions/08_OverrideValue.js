function login(username="mohit"){
    if(username === ""){
        return "Please enter a valid username"
    }
    return `${username} just log in`
}

console.log(login()) // mohit just log in
login("Manish"); // Manish just log in
// override thevalue of the username