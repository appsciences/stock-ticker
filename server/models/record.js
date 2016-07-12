import mongoose from 'mongoose';

const Record = new mongoose.Schema({
  symbol: { type: String, required: true },
  numbers: {
    day0: Number,
    day1: Number,
    day2: Number,
    day3: Number,
    day4: Number,
    day5: Number
  }
});

export default mongoose.model('Record', Record);