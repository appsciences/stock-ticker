jest.disableAutomock();

import { getQuotes } from '../server/services/yahoo.finance';

xdescribe('Yahoo API Test', () => {

    it('Check Yahoo Finance API', () => {

        getQuotes(['GOOG']).then(response => {

                const change = response.query.quotes[0].Change;
                expect(response.query.quotes[0].Change).toBeUndefined(true);
                console.log(change);
            }
        );
    });
});




