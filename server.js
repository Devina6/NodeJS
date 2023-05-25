//creates a server at port 4000 and consoles in cmd
//localhost:4000 to call server from browser

const http = require('http')//http=global module,./http=local http file
const server = http.createServer((req,res)=>{
   const url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write("<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></form></body>");
    res.write('</html>');
    return res.end();
    }
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>HOME</title></head>');
        res.write("<body><h1>Welcome Home</h1></body>");
        res.write('</html>');
        return res.end();
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>ABOUT</title></head>');
        res.write("<body><h1>Welcome to About Us Page</h1></body>");
        res.write('</html>');
        return res.end();
    }
    if (url==='/node'){
        res.write('<html>');
        res.write('<head><title>NODE</title></head>');
        res.write('<body><h1>Welcome to my Node js Project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }
});
server.listen(4000);
