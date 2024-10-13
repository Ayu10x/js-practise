const accountId = 144564
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"

// accountId = 2 // not allowed
accountEmail = "ayp.scp@google.com"
accountPassword = "oppai8008"
accountCity = "Bengaluru"
let accountState;

console.table([accountEmail, accountPassword,accountCity, accountState]);

// "var" has a scope problem(issue in block scope and functional scope), so for recurring variables we use "let".