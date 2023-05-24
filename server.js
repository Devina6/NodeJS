//creates a server at port 4000 and consoles in cmd
//localhost:4000 to call server from browser

const http = require('http')//http=global module,./http=local http file
const server = http.createServer((req,res)=>{
    console.log('devina')
});
server.listen(4000);
