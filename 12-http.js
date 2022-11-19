const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page');
    res.end();
  } else if (req.url === '/about') {
    res.end('Here is our history');
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We cannot seem to find the page you are looking for</p>
  <a href="/">Back Home</a>
  `);
  }
});
server.listen(5050);
