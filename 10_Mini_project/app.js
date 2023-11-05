const express = require("express");
fs = require("fs");
const path = require('path');
const app = express();
port = 80;


// EXPRESS SPECIFIC CONFIG
app.use('/public',express.static('public'));  // for using static file
app.use(express.urlencoded());

// PUG SPECIFIC CONFIG
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  // set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('index.pug')

});


app.listen(port,()=>{
    console.log(`The application started successfully at ${port}`)
})

