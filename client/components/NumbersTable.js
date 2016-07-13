import React from 'react';
import { Table } from 'react-bootstrap';

const timings = [
  'Pre-Market', 'Opening', '3 secs', '6 secs', '9 secs', '50 secs',
  '1 min', '1:10 min', '1:20 min', '4:50 mins', '5 mins', '5:10 mins',
  'closing'
];

const NumbersTable = ({ record }) => (
  <Table striped bordered condensed hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Today</th>
      <th>Yesterday</th>
      <th>-2 days</th>
      <th>-3 days</th>
      <th>-4 days</th>
      <th>-5 days</th>
    </tr>
    </thead>
    <tbody>
    {
      timings.map((timing, i) => (
        <tr>
          <td>{timing}</td>
          <td>{record.numbers['day0'][i]}</td>
          <td>{record.numbers['day1'][i]}</td>
          <td>{record.numbers['day2'][i]}</td>
          <td>{record.numbers['day3'][i]}</td>
          <td>{record.numbers['day4'][i]}</td>
          <td>{record.numbers['day5'][i]}</td>
        </tr>
      ))
    }
    </tbody>
  </Table>
);

export default NumbersTable;