import 'whatwg-fetch';
import io from 'socket.io-client';

const socket = io();


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

}