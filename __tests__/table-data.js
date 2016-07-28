jest.disableAutomock();

import { getTableData } from '../client/components/numbers-table';

describe('numbers table', () => {

    it('returns good stuffs', () => {

        expect(getTableData([
            {
                "Symbol": "YHOO",
                "Date": "2016-07-22",
                "Open": "38.900002",
                "High": "39.419998",
                "Low": "38.779999",
                "Close": "39.380001",
                "Volume": "11270200",
                "Adj_Close": "39.380001"
            },
            {
                "Symbol": "YHOO",
                "Date": "2016-07-21",
                "Open": "39.009998",
                "High": "39.25",
                "Low": "38.720001",
                "Close": "38.849998",
                "Volume": "7643800",
                "Adj_Close": "38.849998"
            },
            {
                "Symbol": "YHOO",
                "Date": "2016-07-20",
                "Open": "38.360001",
                "High": "38.93",
                "Low": "38.259998",
                "Close": "38.900002",
                "Volume": "8178000",
                "Adj_Close": "38.900002"
            },
            {
                "Symbol": "GOOG",
                "Date": "2016-07-22",
                "Open": "741.859985",
                "High": "743.23999",
                "Low": "736.559998",
                "Close": "742.73999",
                "Volume": "1256300",
                "Adj_Close": "742.73999"
            },
            {
                "Symbol": "GOOG",
                "Date": "2016-07-21",
                "Open": "740.359985",
                "High": "741.690002",
                "Low": "735.830994",
                "Close": "738.630005",
                "Volume": "969100",
                "Adj_Close": "738.630005"
            },
            {
                "Symbol": "GOOG",
                "Date": "2016-07-20",
                "Open": "737.330017",
                "High": "742.130005",
                "Low": "737.099976",
                "Close": "741.190002",
                "Volume": "1289700",
                "Adj_Close": "741.190002"
            }
        ])).toEqual([
            {
                "Symbol": "GOOG",
                "day1": "",
                "day2": "",
                "day3": "",
                "day4": "",
                "day5": ""
            },
            {
                "Symbol": "Yahooo",
                "day1": "",
                "day2": "",
                "day3": "",
                "day4": "",
                "day5": ""
            }]);

    });
});




