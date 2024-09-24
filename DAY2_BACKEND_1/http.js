let http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/html'})
    res.write("You are welcome");
    res.write(req.headers.toString())
    res.end(); // End the response
});

server.listen(8090, function() {
    console.log("Server is running at port 8090"); // Update the port number to 8090
});
