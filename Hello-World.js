var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if(err) throw err;
    
    console.log('sucess');
  });
}).listen(8080);