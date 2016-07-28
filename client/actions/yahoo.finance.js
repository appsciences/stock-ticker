import request from 'request-promise';

export function getQuotes(symbols) {
  const symbolsString = symbols.map(s => `"${s}"`).join(',');

  const query = `select * from yahoo.finance.historicaldata where ` +
      `symbol in (${symbolsString}) ` +
      `and startDate = 2016-06-20 `
      `and endDate = 2016-06-25 `;

  const uri = 'https://query.yahooapis.com/v1/public/yql';

  const options = {
    uri,
    json: true,
    qs: {
      q: query,
      format: 'json',
      env: 'store://datatables.org/alltableswithkeys'
    }
  };

  return request(options);
}