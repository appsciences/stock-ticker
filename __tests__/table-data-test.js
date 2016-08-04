jest.disableAutomock();

import { getTableData } from '../client/components/quotes-table';

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
            }
        ], 2)).toEqual([

            {
                "Symbol": "YHOO",
                "day1": '0.48',
                "day2": '-0.16',
            },
            {
                "Symbol": "GOOG",
                "day1": '0.88',
                "day2": '-1.73'
            },]);

    });
});




