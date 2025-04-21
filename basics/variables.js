const accountId = 123;
let username = "Zuhair";
var accountPassword = "12345";
let accountState;

console.log(accountId);
console.table([accountId, username, accountPassword, accountState]);

// Prefer not to use variable due to block and function scope

username = "Ahmed";
console.log(username);