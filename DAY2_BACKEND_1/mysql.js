let mysql = require('mysql2');

// create connection
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eav_kivumu', 
    port: 3307
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    connection.query("CREATE DATABASE  eav_deamo", function(err, results){
        if(err) throw err;
        console.log("Database created");
    })
    connection.query("DROP DATABASE eav_deamo", function(err, results){
        if(err) throw err;
        console.log("Database dropped");
    })

})
