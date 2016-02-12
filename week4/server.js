const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('<h1>Hello World</h1>\n');
  response.write('<p1>This is a node app<p>\n');
  response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');