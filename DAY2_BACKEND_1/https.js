const https = require('https');
const fs = require('fs');

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync('path/to/private-key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem')
};

// Create an HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, secure world!');
});

// Listen on a port
server.listen(443, () => {
  console.log('HTTPS server is running on port 443');
});
