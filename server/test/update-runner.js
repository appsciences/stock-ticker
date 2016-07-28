import { updateRecords, storeCurrentAsFinal } from '../services/updater';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MONGODB_URI);

} else {
    mongoose.connect('mongodb://localhost:27017/test');
}
updateRecords(1);





