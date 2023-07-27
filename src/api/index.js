const commonOptions = {
	dataType: 'json',
	headers: { 'X-Auth-Token': process.env.API_TOKEN },
	mode: 'cors',
};

const makeRequest = (endpoint, method) => {
	if (!endpoint || !method) return null;
	return new Promise((resolve, reject) => {
		fetch(`${process.env.API_URL}${endpoint}`, {
			...commonOptions,
			method,
		})
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
};

export const get = (endpoint) => makeRequest(endpoint, 'GET');
