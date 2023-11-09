const http = require('http');
// handle request and response with API and clients
http.createServer((req,res)=>{
    res.write("<h1>Hello world</h1>");
    res.end
}).listen(80)