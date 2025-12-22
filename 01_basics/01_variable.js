const accountId = 12345
let accountEmail = "Suraj@gmail.com"
var accountPassword = "181818"
accountCity = "Bihar" // not recommended

/*  
Prefer not to use var
because of block scope and functional scope

*/

// accountId = 101010 // not allowed

// console.log(accountId);
accountCity = "Chakia"

console.table([accountId,accountEmail,accountPassword,accountCity])


