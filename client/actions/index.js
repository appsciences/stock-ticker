import 'whatwg-fetch';

const postJsonFetchConfig = {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
};

export function fetchRecords() {
	return fetch('/api/record')
		.then(response => response.json());
}

export function saveNewRecord(symbol) {
	const body = { symbol };

	return fetch('/api/record', {
		...postJsonFetchConfig,
		body: JSON.stringify(body)
	}).then(response => response.json());
}