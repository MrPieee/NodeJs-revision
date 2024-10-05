const fs = require('fs');
const http =require('http');

const port = 2832;
const hostname= 'localhost';

const httpServer= http.createServer((req,res)=>{

    const readFile=(fileName,statusCode)=>{
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    };
    
    if (req.url ==='/') {
        readFile('./view/home.html',200);
    } else if (req.url ==='/about') {
        readFile('./view/about.html',200);
    } else if (req.url ==='/contact') {
        readFile('./view/contact.html',200);
    } else {
        readFile('./view/error.html',404);
    };
});

httpServer.listen(port,hostname,()=>{
    console.log(`The server is running on http:${hostname}:${port}`);
})