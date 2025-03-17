const accountId = 144234
//In const value cannot be changed

let accountEmail = "aryan@gmail.com"
/*Now used instead of var because of the bloack and functional 
scoping problem*/

var accountPassword = "12345"
//Not used now

accountCity = "Delhi"
//can declare variable like this but is not preferred.

let accountState;
//It will output undefined

// accountId = 234 (not allowed)

accountEmail = "sdqw@gmail.com"
accountPassword = "113124"
accountCity = "MP"

console.log(accountId);

console.log([accountEmail],[accountPassword],[accountCity],[accountState]);