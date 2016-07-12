import { getQuotes } from './yahoo.finance';
import Record from '../models/record';

export async function update() {
	const records = await Record.find();
	const symbols = records.map(r => r.symbol);
	
	const quotes = await getQuotes(symbols);

	console.log(quotes);
}