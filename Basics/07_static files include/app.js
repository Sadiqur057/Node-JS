const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public') // to get the path

app.use(express.static(publicPath)); // load static files

app.listen(80)