let fs = require('fs');
let http = require('http');

http.createServer(function(req, res){
let myfile = "demofile.html";
let newfile = 'newfile.html';
fs.readFile(myfile, function(err, data){
    // if(err){
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     return res.end("404 Not Found");
    //     // console.log(err);
        
    // }
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(data)
    // res.end();

    // create file 
    // fs.appendFile(newfile, '<h1>am new </h1>',
    //      function(err){
    //         if(err) throw err;
    //     console.log("file created");
        
    //     })
        // delet file 
        fs.unlink(newfile, function (err) {
            if (err) throw err;
            console.log('File deleted!');
          });
})
}).listen(8090, function(){
    console.log("Server started on port 8090");
});