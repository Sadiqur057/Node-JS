const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname,'files')
const filePath = `${dirName}/sample.txt`;

// write/create file
// fs.writeFileSync(`${dirName}/sample.txt`,"this is a simple text file")

// readfile
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
    
// })

// update file
// fs.appendFile(filePath,' and file name is sample .txt',(err)=>{
//     if(!err){
//         console.log("File is updated")
//     }
// })

// rename file
// fs.rename(filePath,`${dirName}/sample.txt`,(err)=>{
//     console.log("File name is updated and new file is")
// })

// delete file
// fs.unlinkSync(filePath);

// buffer => temporary file location . when are doing operation with node js, it does nedd a amout of memory => buffer