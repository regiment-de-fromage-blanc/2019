const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'nuit';
const MongoClient = require('mongodb').MongoClient(dbUrl, { useUnifiedTopology: true });
const assert = require('assert');

MongoClient.connect( (err, client) => {
    // Get DB connexion
    assert.equal(null, err);
    console.log("Connected successfully to MongoDB server");
    const db = client.db(dbName);

    // Routing
    app.get('/', (req, res) => res.send('Hello World!'));
});

app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
