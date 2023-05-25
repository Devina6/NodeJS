const fs = require ('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if(url==='/'){
        return fs.readFile('message.txt',{encoding:'utf8'},(err,data)=>{
            if(err){
                console.log(err);
            }
            //console.log('data from file '+data);
            res.setHeader('Content-Type','text/html')
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body><h3>${data}</h3></body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
        });
        
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
        req.on('data',(chunk)=>{ //data is node js eventlistener
            body.push(chunk);
        });
        return req.on('end',()=>{ //end is node js eventlistener
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
}
module.exports = requestHandler;
