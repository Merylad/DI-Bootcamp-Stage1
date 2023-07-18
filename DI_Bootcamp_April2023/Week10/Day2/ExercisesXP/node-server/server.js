const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http'); 
const server = http.createServer((req, res) => {   
    res.end(JSON.stringify(user));
});
server.listen(8080); 
console.log('Node.js web server at port 8080 is running..')