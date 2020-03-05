//Regular Expressions
//Every program was run separetly

//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);

//Restrict Possible Usernames
let username = "c573";
let userCheck = /^[a-z]([a-z]+|[0-9]{2})\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

//Positive and Negative Lookahead
let sampleWord = "bana12";
let pwRegex = /^(?!\d)(?=\w{4,}(?=\d{2}))(?=\D*)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);
