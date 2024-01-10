interface RequestArgs {
	endpoint: 'leagues' | 'teams' | 'fixtures';
	headers?: {
		[key: string]: any;
	};
	queryParams?: {
		[key: string]: any;
	};
}

export const makeRequest = async (options: RequestArgs) => {
	console.log(`>>> requesting: ${options.endpoint}`);
	const requestHeaders = {
		'x-rapidapi-host': process.env.EXPO_PUBLIC_API_HOST,
		'x-rapidapi-key': process.env.EXPO_PUBLIC_API_KEY,
		...options.headers,
	};

	const queryParams = new URLSearchParams(options.queryParams);
	const url = `https://${process.env.EXPO_PUBLIC_API_HOST}/${options.endpoint}/?${queryParams.toString()}`;

	try {
		const response = await fetch(url, {
			headers: requestHeaders,
		});
		const data = await response.json();
		return data;
	} catch (err: any) {
		return new Error(err);
	}
};
