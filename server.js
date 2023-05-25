//creates a server at port 4000 and consoles in cmd
//localhost:4000 to call server from browser

const http = require('http')//http=global module,./http=local http file
const server = http.createServer((req,res)=>{
    console.log('devina');
    
    //view request
    console.log(req);
    console.log(req.url,req.method,req.headers);
   
    //return a response
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello World</title></head>');
    res.write('<body><h1>Welcome to my Node js Project</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(4000);
