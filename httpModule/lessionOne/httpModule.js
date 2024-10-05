const http = require('http');

const port=2212;

// Create node server with HTTP modules

const myserver= http.createServer((req,res)=>{
    res.writeHead(201,{'Content-Type':'application/json'});
    res.write(`{
        name: "Mr.xxx",
        age:222,
        class:'Ten'
        }`);
    res.end()
});


// start the server 
myserver.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`);
})
