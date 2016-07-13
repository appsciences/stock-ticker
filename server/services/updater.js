import { getQuotes } from './yahoo.finance';
import Record from '../models/record';

export async function updateRecords(timingId) {
  const records = await Record.find();

  if (!records.length) return;

  const symbols = records.map(r => r.symbol);

	try {
		const quotes = await getQuotes(symbols);

		const promises = [];

		quotes.forEach((quote, i) => {
			promises.push(Record.update({ _id: records[i]._id }, {
					'$set': { [`numbers.day0.${timingId}`]: quote.Change }
				})
			);
		});

		console.log(await Promise.all(promises));
	} catch(e) {
		console.error(e);
	}
}