import React from 'react';
import { Table } from 'react-bootstrap';

const market = {
  name: 'Facebook',
  numbers: [
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12],
    [-0.40, 0.10, -0.20, 0.10, -0.20, 0.10, -0.12]
  ]
};

const timings = [
  'Pre-Market', 'Opening', '3 secs', '6 secs', '9 secs', '50 secs',
  '1 min', '1:10 min', '1:20 min', '4:50 mins', '5 mins', '5:10 mins',
  'closing'
];

const MarketsTable = () => (
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
          <td>{market.numbers[i][0]}</td>
          <td>{market.numbers[i][1]}</td>
          <td>{market.numbers[i][2]}</td>
          <td>{market.numbers[i][3]}</td>
          <td>{market.numbers[i][4]}</td>
          <td>{market.numbers[i][5]}</td>
        </tr>
      ))
    }
    </tbody>
  </Table>
);

export default MarketsTable;