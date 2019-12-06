const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'nuit';
const MongoClient = require('mongodb').MongoClient(dbUrl, { useUnifiedTopology: true });
const assert = require('assert');
const dbFunctions = require('./db');

// Application configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Database & routing
MongoClient.connect( (err, client) => {
    // Get DB connexion
    assert.equal(null, err);
    console.log("Connected successfully to MongoDB server");
    const db = client.db(dbName);

    // Routing
    app.post('/register', (req, res) => dbFunctions.register(req, res, db) );
});

// Port listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
