const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";

async function CreateDatabase() {
    const client = new MongoClient(url);
    
    try {
        await client.connect();
        console.log("Connected successfully to server");
        
        const db = client.db(dbName);
        
        // Use await instead of a callback
        const result = await db.createCollection("students");
        console.log("Collection 'students' created!");

    } catch (err) {
        console.error('Could not connect to MongoDB', err);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

CreateDatabase();
