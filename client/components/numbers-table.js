import React from 'react';
import _ from 'lodash';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const numberFormatter = (cell) => {
    if (!cell) return '--';
    return cell > 0 ?
        <span style={{color: 'green'}}>+{cell}</span> :
        <span style={{color: 'red'}}>{cell}</span>;
};

const getTableData = (data, days) => {

    var dayNo = 0;

    let result = [];

    data.reduce((prev, curr) => {

        let tickerEntry = Object.assign(prev, {symbol: curr.Symbol, ['day' + (dayNo+1)]:(parseFloat(curr.Close) - parseFloat(curr.Open)).toFixed(2)});

        if(dayNo == days -1){
            result = result.concat(tickerEntry);
            dayNo = 0;
            tickerEntry = {};
        }else{

            dayNo = dayNo + 1;
        }
        return tickerEntry;

    }, {});

    return result;
};

const NumbersTable = ({data, onDeleteTicker, days}) => {

    const tickerFormatter = (cell, row) =>
        <div><Glyphicon glyph="align-left" onClick={(e) => onDelelteTicker(row)}/>&nbsp;cell</div>;


    return (


        <BootstrapTable
            data={getTableData(data, days)}
            striped={true}
            hover={true}
        >
            <TableHeaderColumn isKey={true} dataField="symbol" dataSort={true}>Symbol</TableHeaderColumn>

            {_.times(days, dayNo =>

            <TableHeaderColumn
                dataField={"day" + (dayNo + 1)}
                dataSort={true}
                dataFormat={numberFormatter}>
                {"-" + (dayNo + 1)} days</TableHeaderColumn>
            )}
        </BootstrapTable>
    );
};

export {NumbersTable, getTableData};