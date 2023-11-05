const express = require("express");
const path = require('path');
const app = express();
port = 80;

// EXPRESS SPECIFIC CONFIG
app.use('/static',express.static('static'));  // for using static file


// PUG SPECIFIC CONFIG
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  // set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is a content provided from app.js";
    const params = {'title':'This is a title provided from app.js', 'content': con}
    res.status(200).render('index.pug',params)

});





app.listen(port,()=>{
    console.log(`The application started successfully at ${port}`)
})

