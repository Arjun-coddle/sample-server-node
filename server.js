const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"index.html"),"utf-8",(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {"Content_Type":"text.html"})
            res.end(data);
        })
    }
    if(req.url === '/page1'){
        fs.readFile(path.join(__dirname,"pages","page1.html"),"utf-8",(err, data)=> {
            if(err) throw err
            res.writeHead(200, {"Content_Type":"text.html"})
            res.end(data);
        })
    }
    if(req.url === '/page2'){
        fs.readFile(path.join(__dirname,"pages","page2.html"),"utf-8",(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {"Content_Type":"text.html"});
            res.end(data);
        })
    }
})

const PORT = 3001 || process.env.PORT
server.listen(PORT)