// Synchornous or blocking
// => line by line execution

// Asynchronous Execution
// => line by line got guaranteed.
// callback will fire

const fs = require("fs");
 fs.readFile("text.txt","utf-8", (err,data)=>{
    console.log(err);
    console.log(data);
    // if error then error will be shown or it will be null
});
console.log("This is a message");

