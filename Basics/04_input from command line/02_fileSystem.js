const fs = require('fs');
// fs.writeFileSync('apple.txt','this is apple file');
const path = require('path');
const dirPath = path.join(__dirname,'files'); //=> return current directory path => files paths
// console.log(dirPath)


// creating file
for(i =0; i<=3;i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"a simple txt file")
}

// reading file
fs.readdir(dirPath,(err,files)=>{
    files.forEach((elem)=>{
        console.log(elem)
    })
})

// when we create a folder it become as web server, it doesnot know about outside of the folder