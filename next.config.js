/** @type {import('next').NextConfig} */

const setEnvVars = () => {
	const envObj = {};
	const KEYS_TO_SET = ['API_URL', 'API_TOKEN'];
	for (let key in process.env) {
		if (KEYS_TO_SET.includes(key)) envObj[key] = process.env[key];
	}
	return envObj;
};

const nextConfig = {
	env: setEnvVars(),
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'crests.football-data.org',
			},
		],
	},
};

module.exports = nextConfig;
