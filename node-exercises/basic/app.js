var http = require('http');

http.createServer(function (req, res) {
    //Req === request
    //Res === response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Another State\n');
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');