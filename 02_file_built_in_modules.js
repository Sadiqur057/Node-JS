const fs = require("fs");
let text = fs.readFileSync("text.txt","utf-8");
console.log(text);

text = text.replace("text","text content")
console.log(text);

console.log("Creating a new file..")
fs.writeFileSync("text2.txt",text)
