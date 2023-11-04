// Express is a web application framework for node js
// url parsing can be handled by express js, handle routing


const express = require("express");
const path = require('path');
const app = express();
port = 80;

// set the template engine as pug
app.set('view engine', 'pug')

// set the views directory
app.set('views', path.join(__dirname, 'views'))

// for using static file
app.use('/static',express.static('static'));

//  demo pug end point
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app");
})
app.get("/about",(req,res)=>{
    res.send("This is about page of express app");
})
app.post("/about",(req,res)=>{
    res.send("This is a post rquest in about page of express app");
})

app.listen(port,()=>{
    console.log(`The application started successfully at ${port}`)
})

