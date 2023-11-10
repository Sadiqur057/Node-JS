const fs = require('fs');

const input = process.argv;
// fs.writeFileSync(input[2],input[3])
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
    // input => index.js apple.txt "This is an apple"
}else if(input[2]='remove'){
    fs.unlinkSync(input[3])
    // input => index.js apple.txt 
}else{
    console.log("invalid output")
}