let sampleWord = "bana12";
let pwRegex = /^(?!\d)(?=\w{4,}(?=\d{2}))(?=\D*)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);
