const http=require("http");

var server=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end("WELCOME TO HOME PAGE");
    }
    else if(req.url=='/about')
    {
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end("THIS IS A SIMPLE NODE.JS SERVER");
    }
    else if(req.url=='/contact') 
    {
       res.writeHead(404,{'Content-Type':'text/plain'});
       res.end("CONTACT US AT contact@example.com");
    }
    else 
    {
       res.statusCode=404;
       res.statusMessage='404 PAGE NOT FOUND';
       res.writeHead(404,{'Content-Type':'text/plain'});
       res.end("PAGE NOT FOUND");
    }
})
server.listen(3000);