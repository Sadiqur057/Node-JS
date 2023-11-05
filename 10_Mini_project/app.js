const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC CONFIG
app.use('/static',express.static('public')); // for serving static files'
// EXPRESS SPECIFIC CONFIG
// app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded());

// PUG SPECIFIC CONFIG
app.set('view engine','pug'); // set the template engine as pug
app.set('views', path.join(__dirname,'views')) // set the views directory
// ENDPOINTS
app.get('/',(req,res)=>{
    const params= "";
})

// start the server
app.listen(port,()=>{
    console.log(`The application is running at port ${port}`)
})
