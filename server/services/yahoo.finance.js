import request from 'request-promise';

export function getQuotes(symbols) {
  const symbolsString = symbols.map(s => `"${s}"`).join(',');
  const query = `select * from yahoo.finance.quote where symbol in (${symbolsString})`;

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

  return request(options)
    .then(response => {
	    const { quote } = response.query.results;

	    // return an array in any case
	    return Array.isArray(quote) ? quote : [quote];
    });
}