import React from 'react';
import _ from 'lodash';

import { BootstrapTable, TableHeaderColumn, Glyphicon } from 'react-bootstrap-table';

const numberFormatter = (cell) => {
    if (!cell) return '--';
    return cell > 0 ?
        <span style={{color: 'green'}}>+{cell}</span> :
        <span style={{color: 'red'}}>{cell}</span>;
};

const tickerFormatter = (cell, row) => (
    <div>
        <Glyphicon
            glyph="align-left"
            onClick={(e) => onDeleteTicker(row)}/>&nbsp;cell
    </div>
);

const getTableData = (data) =>

    //group by symbol
    //for each group, reduce array of quotes into single object {symbol, day1:open - close, ....
    //extract values as array from result [{symbol:...}]

    _.values(
        _.mapValues(
            _.groupBy(data, "Symbol"),
            v => v.reduce((prev, curr, i) =>
                    Object.assign(prev, {
                        symbol: curr.Symbol,
                        ['day' + i]: (parseFloat(curr.Close) - parseFloat(curr.Open)).toFixed(2)
                    }),
                {})
        ));

const NumbersTable = ({data, onDeleteTicker, days}) => {

    console.log(data);

    //doesn't work for some reason
    //dataFormat={tickerFormatter}

    return (

        <BootstrapTable
            data={getTableData(data)}
            striped={true}
            hover={true}
        >
            <TableHeaderColumn
                isKey={true}
                dataField="symbol"
                dataSort={true}
                >Symbol
            </TableHeaderColumn>

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