const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(_,res)=>{
    const user = {
        name: "Sadiqur Rahman",
        email: "test@test.com",
        skills:['html','css','js','nodejs','mysql','mongodb']
    }
    res.render('index',{user})
})

app.listen(80);