import 'whatwg-fetch';
import io from 'socket.io-client';

const socket = io.connect(window.location.origin);

const onUpdatesListeners = [];

socket.on('records', records => {
  console.log(records);
  onUpdatesListeners.forEach(l => l(records));
});

export function fetchRecords() {
  return fetch('/api/record')
    .then(response => response.json());
}

export function saveNewRecord(symbol) {
  const body = { symbol };

  return fetch('/api/record', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
}

export function subscribeOnUpdates(callback) {
  console.log('subbed');
  onUpdatesListeners.push(callback);
}