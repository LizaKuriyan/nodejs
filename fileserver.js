var http = require('http');
var url = require('url');
var fs = require('fs');
var EventEmitter = require('events');

var eventEmitter = new EventEmitter();

eventEmitter.on('pageViewed', function(pageName) {
  console.log("Page viewed: " + pageName);
});

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname + ".html";

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("Page Not Found");
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    eventEmitter.emit('pageViewed', filename);
  });
}).listen(8080);