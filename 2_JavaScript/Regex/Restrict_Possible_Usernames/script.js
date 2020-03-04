let username = "c573";
let userCheck = /^[a-z]([a-z]+|[0-9]{2})\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);
