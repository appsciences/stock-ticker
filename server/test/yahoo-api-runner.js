import { getQuotes } from '../services/yahoo.finance';


getQuotes(['GOOG']).then(response => {
    console.dir(response);
    const change = response.query.results.quote.Change;
    console.info(`Change: ${change}`);
})




