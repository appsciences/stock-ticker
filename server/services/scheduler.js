import schedule from 'node-schedule';

import { updateRecords } from './updater';

const toMilliseconds = (seconds, minutes = 0) => (minutes * 60 + seconds) * 1000;

const timings = [
  {
    id: 0,
    name: 'pre-market',
    value: [
      '*/10 0-8,16-23 * * *', // every 0, 10, 20, 30, 40 and 50th min and 0-8,16-23 hours
      '0,10,20 9 * * *'       // every 0, 10 and 20th minute past the 9th hour
    ]
  },
  {
    id: 1,
    name: 'opening',
    value: ['30 9 * * *'],    // at 09:30
    after: [
      { id: 2, name: '3 secs', value: toMilliseconds(3) },
      { id: 3, name: '6 secs', value: toMilliseconds(6) },
      { id: 4, name: '9 secs', value: toMilliseconds(9) },
      { id: 5, name: '50 secs', value: toMilliseconds(50) },
      { id: 6, name: '1 min', value: toMilliseconds(0, 1) },
      { id: 7, name: '1:10 min', value: toMilliseconds(10, 1) },
      { id: 8, name: '1:20 min', value: toMilliseconds(20, 1) },
      { id: 9, name: '4:50 min', value: toMilliseconds(50, 4) },
      { id: 10, name: '5 mins', value: toMilliseconds(0, 5) },
      { id: 11, name: '5:10 min', value: toMilliseconds(10, 5) }
    ]
  },
  {
    id: 12,
    name: 'closing',
    value: ['05 16 * * *']   // at 16:05
  }
];

timings.forEach(timing => {
  timing.value.forEach(cron => schedule.scheduleJob(cron, () => {
    if (timing.after) {
      timing.after.forEach(after => {
        setTimeout(() => executeUpdating(after.id), after.value);
      });
    }

    executeUpdating(timing.id);
  }));
});

function executeUpdating(timingId) {
  console.log('Running job: timingId=', timingId);
  updateRecords(timingId);
}

