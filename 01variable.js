const accountId = 1234565;
let accountEmail = "laxman@gmail.com";
var accountPass = "122524";
accountCity = "New Delhi";

let accountState;

// accountId = 2; // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "abc@gmail.com"
accountPass = "12345874"
accountCity = "Noida"

console.table([accountEmail, accountPass, accountCity, accountState]);


