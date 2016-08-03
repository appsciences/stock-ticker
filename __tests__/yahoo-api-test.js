jest.disableAutomock();

var urlShim = require('urlutils');

import { getData, getQuery } from '../client/actions/yahoo.finance';

xdescribe('Yahoo API Test', () => {

    it('Check Yahoo Finance API', () => {

        getData(['GOOG'],5,urlShim).then(response => {

                const change = response.query.quotes[0].Change;
                expect(response.query.quotes[0].Change).toBeUndefined(true);
                console.log(change);
            }
        );
    });
});

describe('Query test', () => {

    it('formats proper query with one ticker', () => {


                expect(getQuery(['GOOG'],5)).toBe(
                    'select * from yahoo.finance.historicaldata where symbol in ("GOOG") and startDate = "2016-07-21" and endDate = "2016-07-27"'
                );
            }
        );

    it('formats proper query with two tickers', () => {


                expect(getQuery(['GOOG','YHOO'],5)).toBe(
                    'select * from yahoo.finance.historicaldata where symbol in ("GOOG","YHOO") and startDate = "2016-07-21" and endDate = "2016-07-27"'
                );
        }
    );


    it('formats proper query with three tickers', () => {


                expect(getQuery(['GOOG','YHOO','MSFT'],5)).toBe(
                    'select * from yahoo.finance.historicaldata where symbol in ("GOOG","YHOO","MSFT") and startDate = "2016-07-21" and endDate = "2016-07-27"'
                );
        }
    );
});




