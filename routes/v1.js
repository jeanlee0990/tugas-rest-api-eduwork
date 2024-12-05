const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "myDatabase";

router.get('/users', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const newUser = req.body;
    const result = await db.collection('users').insertOne(newUser);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
