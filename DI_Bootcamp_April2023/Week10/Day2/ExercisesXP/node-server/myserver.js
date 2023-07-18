const http = require('http'); 
const server = http.createServer((req, res) => {   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is my first response </h1>')
    res.write('<h1>This is second response </h1>')
    res.write('<h4>This is my third response </h4>')
    res.end();
});
server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')