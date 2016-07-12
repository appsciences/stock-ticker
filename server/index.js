import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import './services/scheduler';

import Record from './models/record';

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.json());
app.use(express.static(path.resolve('build/client')));

const wrap = fn => (...args) => fn(...args).catch(args[2]); // re-throw express error to next()

app.get('/api/record', wrap(async (req, res, next) => {
  const records = await Record.find({});
  res.send(records);
}));

app.post('/api/record', async (req, res, next) => {
  const { symbol } = req.body;
  const savedRecord = await new Record({ symbol }).save();
  res.send(savedRecord);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build/client/index.html'));
});

app.listen(3000, () => {
  console.log('server started. port: 3000');
});