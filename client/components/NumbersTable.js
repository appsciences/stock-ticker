import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const timings = [
  'Pre-Market', 'Opening', '3 secs', '6 secs', '9 secs', '50 secs',
  '1 min', '1:10 min', '1:20 min', '4:50 mins', '5 mins', '5:10 mins',
  'closing'
];

const numberFormatter = (cell, row) => {
  if (!cell) return '--';
  return cell > 0 ?
    <span style={{color: 'green'}}>+{cell}</span> :
    <span style={{color: 'red'}}>{cell}</span>;
};

const NumbersTable = ({ record }) => {
  const tableData = [];

  const { numbers } = record;

  timings.forEach((timing, i) => {
    const row = [];

    row.timing = timing;
    row.day0 = numbers.day0[i];
    row.day1 = numbers.day1[i];
    row.day2 = numbers.day2[i];
    row.day3 = numbers.day3[i];
    row.day4 = numbers.day4[i];
    row.day5 = numbers.day5[i];

    tableData[i] = row;
  });

  return (
    <BootstrapTable data={tableData} striped={true} hover={true}>
      <TableHeaderColumn dataField="timing" isKey={true} dataAlign="left" dataSort={true} />
      <TableHeaderColumn dataField="day0" dataSort={true} dataFormat={numberFormatter}>Today</TableHeaderColumn>
      <TableHeaderColumn dataField="day1" dataSort={true} dataFormat={numberFormatter}>Yesterday</TableHeaderColumn>
      <TableHeaderColumn dataField="day2" dataSort={true} dataFormat={numberFormatter}>-2 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day3" dataSort={true} dataFormat={numberFormatter}>-3 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day4" dataSort={true} dataFormat={numberFormatter}>-4 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day5" dataSort={true} dataFormat={numberFormatter}>-5 days</TableHeaderColumn>
    </BootstrapTable>
  );
};

// const NumbersTable = ({ record }) => (
//   <Table striped bordered condensed hover>
//     <thead>
//     <tr>
//       <th>#</th>
//       <th>Today</th>
//       <th>Yesterday</th>
//       <th>-2 days</th>
//       <th>-3 days</th>
//       <th>-4 days</th>
//       <th>-5 days</th>
//     </tr>
//     </thead>
//     <tbody>
//     {
//       timings.map((timing, i) => (
//         <tr>
//           <td>{timing}</td>
//           <td>{record.numbers['day0'][i]}</td>
//           <td>{record.numbers['day1'][i]}</td>
//           <td>{record.numbers['day2'][i]}</td>
//           <td>{record.numbers['day3'][i]}</td>
//           <td>{record.numbers['day4'][i]}</td>
//           <td>{record.numbers['day5'][i]}</td>
//         </tr>
//       ))
//     }
//     </tbody>
//   </Table>
// );

export default NumbersTable;