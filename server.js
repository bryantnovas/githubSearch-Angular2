const http = require('http');
const fs = require('fs');


function onRequest(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./index.html').pipe(res);
}

http.createServer(onRequest).listen(8080);
console.log('server now runing....')