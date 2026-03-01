const accountId = "18956"; 

let accountEmail = "me.manish@gmail.com";
var accountPassword = "112233";
 accountCity = "Jaipur";
let accountState;

// accountId = "2"  ❌ Not allowed

accountEmail = "hc@gmail";
accountPassword = "938898hhi40";
accountCity = "Bengaluru";

console.log(accountEmail);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);