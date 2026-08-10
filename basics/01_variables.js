//variables (constants)
const accountId = 144553 //cannot change values in const. constant
let accountEmail = "krisha@google.com"
var accountPassword = "12345"
accountCity = "Mumbai" //can directly declare a variable but not preferred 
let accountState; //var declared but no value so undefined
//accountId = 2// not allowed

console.log(accountId);
accountEmail = "ke@ke.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId)
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})
// {} <- scope 
// var not used because of issue iin functional scope
/*
this is how to write multiple line comments
*/