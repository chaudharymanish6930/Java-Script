const accountId = 112233
let accountEmail ="me.manish@gmail.com"
var accouuntPassword ="112233"
accountCity = "jaipur" // not use to this type of declarations in your programs
let accountState;

//accountId = "2" // not allowed 

accountEmail = "hc@gmail"
accountPassword ="9355342840"
accountCity ="bengaluru"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


