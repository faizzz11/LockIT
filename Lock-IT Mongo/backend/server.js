const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'LockIT';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect()


//get all the data
app.get('/', async (req, res) => {
    
    const db = client.db(dbName);
    const collection = db.collection('Details');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
    
})

// save all the data
app.post('/', async (req, res) => {
    const Passdata = req.body
    const db = client.db(dbName);
    const collection = db.collection('Details');
    const findResult = await collection.insertOne(Passdata);
    res.send({success: true, result: findResult})
})

//delete the data by id
app.delete('/', async (req, res) => {
    const Passdata = req.body
    const db = client.db(dbName);
    const collection = db.collection('Details');
    const findResult = await collection.deleteOne(Passdata);
    res.send({success: true, result: findResult})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})