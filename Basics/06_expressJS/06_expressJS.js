// expressJS is a framework of NodeJS

// install => npm install express
const express = require('express');
const app = express();

// method of express is get() => provide routes ( can be post or get)
// it takes two params => request and response
// server send response
// client send request

app.get('/',(req,res)=>{
    res.send("Hello, This is home page")
})
app.get('/about',(req,res)=>{
    res.send(`<h1>About</h1>
    <p>Name: ${req.query.name}</p>
    `)
})

app.listen(80);