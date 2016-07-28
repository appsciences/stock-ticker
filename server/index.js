import path from 'path';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import Record from './models/record';


const app = express();
const server = http.createServer(app);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URI);

} else {
  mongoose.connect('mongodb://localhost:27017/test');
}

app.use(bodyParser.json());
app.use(express.static(path.resolve('build/client')));

const wrap = fn => (...args) => fn(...args).catch(args[2]); // re-throw express error to next()

app.get('/deal', wrap(async(req, res, next) => {
  const records = await Record.find().exec();
  res.send(records);
}));

app.post('/deal', wrap(async(req, res, next) =>
    res.send( await new Deal(req.body).save())));

app.put('/deal', wrap(async(req, res, next) =>
    res.send( await new Deal(req.body).save())));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build/client/index.html'));
});

server.listen(process.env.PORT || 3001, function() {
    console.info('Listening on port:', this.address().port);
});
