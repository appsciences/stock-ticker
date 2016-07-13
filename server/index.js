import path from 'path';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';

import './services/scheduler';

import Record from './models/record';
import { addOnUpdateListener, removeOnUpdateListener } from './services/updater';


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser.json());
app.use(express.static(path.resolve('build/client')));

const wrap = fn => (...args) => fn(...args).catch(args[2]); // re-throw express error to next()

app.get('/api/record', wrap(async(req, res, next) => {
  const records = await Record.find().exec();
  res.send(records);
}));

app.post('/api/record', wrap(async(req, res, next) => {
  const { symbol } = req.body;

  // const timingsCount = 13;
  // const zeroArray = Array.from({ length: timingsCount }, () => 0);

  const record = new Record({
    symbol,
    // numbers: {
    //   'day0': zeroArray,
    //   'day1': zeroArray,
    //   'day2': zeroArray,
    //   'day3': zeroArray,
    //   'day4': zeroArray,
    //   'day5': zeroArray
    // }
  });

  const savedRecord = await record.save();
  res.send(savedRecord);
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build/client/index.html'));
});

server.listen(3000, () => {
  console.log('server started. port: 3000');
});

io.on('connection', function (socket) {
  const updateHandler = async () => {
    socket.emit('records', await Record.find().exec());
  };

  console.log('connected');

  addOnUpdateListener(updateHandler);

  socket.on('disconnect', () => {
    console.log('disconnect');
    removeOnUpdateListener(updateHandler);
  });
});