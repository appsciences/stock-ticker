import { getQuotes } from './yahoo.finance';
import Record from '../models/record';

let listeners = [];

function emitUpdates() {
  Record.find()
    .exec()
    .then(records => {
      listeners.forEach(l => l(records));
    });
}

export async function updateRecords(timingId) {
  const records = await Record.find().exec();

  if (!records.length) return;

  const symbols = records.map(r => r.symbol);

  try {
    const quotes = await getQuotes(symbols);

    const promises = quotes.map((quote, i) => {
      return Record.update({ _id: records[i]._id }, {
        '$set': { [`numbers.day0.${timingId}`]: quote.Change }
      });
    });

    await Promise.all(promises);
    emitUpdates();
    console.log('Successfully updated');
  } catch (e) {
    console.error(e.stack);
  }
}

export async function storeCurrentAsFinal() {
  const records = await Record.find().exec();

  const promises = records.map(({ _id, numbers }) => {
      return Record.update({ _id }, {
        '$set': {
          'numbers.day0': [],
          'numbers.day1': numbers.day0,
          'numbers.day2': numbers.day1,
          'numbers.day3': numbers.day2,
          'numbers.day4': numbers.day3,
          'numbers.day5': numbers.day4
        }
      });
    });

  try {
    await Promise.all(promises);
    emitUpdates();
    console.log('Current state stored as final');
  } catch (e) {
    console.error(e.stack);
  }
}

export function addOnUpdateListener(cb) {
  listeners.push(cb);
}

export function removeOnUpdateListener(cb) {
  listeners = listeners.filter(l => l !== cb);
}