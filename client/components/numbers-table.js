import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const numberFormatter = (cell, row) => {
    if (!cell) return '--';
    return cell > 0 ?
        <span style={{color: 'green'}}>+{cell}</span> :
        <span style={{color: 'red'}}>{cell}</span>;
};

const getTableData = ({data}) => {

    var dayNo = 0;
    const maxDays = 5;


    return [data.reduce((prev, curr) => {

        if(dayNo === maxDays) {
            dayNo = 0;
            result = result.concat(Object.assign({},prev));
        }
        const result1 =

         Object.assign(prev, {symbol: curr.Symbol, ['day' + dayNo]:(parseFloat(curr.Close) - parseFloat(curr.Open)).toFixed(2)});

        dayNo = dayNo + 1;

        return result1;
    }, {})];

};

const NumbersTable = (data) => (
    <BootstrapTable data={getTableData(data)} striped={true} hover={true}>
      <TableHeaderColumn isKey={true} dataField="symbol" dataSort={true} dataFormat={numberFormatter}>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField="day0" dataSort={true} dataFormat={numberFormatter}>-1 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day1" dataSort={true} dataFormat={numberFormatter}>-2 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day2" dataSort={true} dataFormat={numberFormatter}>-3 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day3" dataSort={true} dataFormat={numberFormatter}>-4 days</TableHeaderColumn>
      <TableHeaderColumn dataField="day4" dataSort={true} dataFormat={numberFormatter}>-5 days</TableHeaderColumn>
    </BootstrapTable>
);

export {NumbersTable, getTableData};