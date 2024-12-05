const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

const uri = "mongodb://localhost:27017/cobarestapi";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
