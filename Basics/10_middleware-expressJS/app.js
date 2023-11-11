// middleware=> used with routes.
// response and request can be accessed with help of middleware and they can be modified
// sometimes wee need to check something like user is below age or to check  authorized/logged in or not/ make limited access for normal user

const express = require('express');
const app =  express();

const reqFilter = (req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send("Please provide age through url =>>> url?age=18")
    }else if(req.query.age<18){
        res.send("You are not allowed to use the service")
    }else{
        next();
    }

}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})

app.get('/user',(req,res)=>{
    res.send("Welcome to user page")
})

app.listen(80)