/**
 *
 * @param tickers -- Array of ticker strings
 * @param days -- No of days
 * @returns {Promise|*|Promise.<TResult>}
 */

export function getQuery(tickers, days){

    const tickersString = tickers.map(s => `"${s}"`).join(',');

    return `select * from yahoo.finance.historicaldata where symbol in (${tickersString}) and startDate = "2016-07-21" and endDate = "2016-07-27"`;


}

export function getData(tickers, days) {

  var url = new URL('https://query.yahooapis.com/v1/public/yql');

  url.searchParams.append('q', getQuery(tickers,days));

  url.searchParams.append('format', 'json');

  url.searchParams.append('env', 'store://datatables.org/alltableswithkeys');

  return fetch(url)
      .then(response => response.json());

}