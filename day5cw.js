const http=require("http");

var server=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end("WELCOME TO ABC COLLEGE");
    }
    else if(req.url=='/about')
    {
       res.writeHead(200,{'Content-Type':'text/html'});
       res.end("<h1>ABOUT ABC COLLEGE</h1>");
    }
    else 
    {
       res.statusCode=404;
       res.statusMessage='NOT FOUND';
       res.writeHead(404,{'Content-Type':'text/plain'});
       res.end("PAGE NOT FOUND");
    }
})
server.listen(8080);