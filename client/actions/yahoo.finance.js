const moment = require('moment');
/**
 *
 * @param tickers -- Array of ticker strings
 * @param days -- No of days
 * @returns {Promise|*|Promise.<TResult>}
 */

export function getQuery(tickers, days){

    const tickersString = tickers.map(s => `"${s}"`).join(',');

    return `select * from yahoo.finance.historicaldata ` +
        `where symbol in (${tickersString}) ` +
        `and startDate = "${startDate(days)}" ` +
        `and endDate = "${endDate()}"`;

}

export function endDate() {
    return moment().format("YYYY-MM-DD");
}

export function startDate(daysBack) {
    return moment().subtract(daysBack, 'days').format("YYYY-MM-DD");
}

export function getData(tickers, days) {

    var url = new URL('https://query.yahooapis.com/v1/public/yql');

    url.searchParams.append('q', getQuery(tickers,days));

    url.searchParams.append('format', 'json');

    url.searchParams.append('env', 'store://datatables.org/alltableswithkeys');

    console.log(getQuery(tickers, days));

    return fetch(url)
        .then(response => response.json());

}