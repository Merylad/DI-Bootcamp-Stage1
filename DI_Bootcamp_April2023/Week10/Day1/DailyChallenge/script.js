const {largeNumber, getTime} = require('./main.js');

const b = 5;

const c = largeNumber + b

console.log(c)


// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
  
  
//   res.write('<html>');
//   res.write('<head><title>My Server</title></head>');
//   res.write('<body>');
//   res.write('<p>My Module is: '+ '</p>');
//   res.write('<p>'+c + '</p>');
//   res.write('<h1>Hi there at the frontend</h1>');
//   res.write('</body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("I'm listening");
// });

const date = getTime()

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  
  res.write('<html>');
  res.write('<head><title>My Server</title></head>');
  res.write('<body>');
  res.write('<p>The date and time are curently: '+date+ '</p>');  
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(8080, () => {
  console.log("I'm listening");
});