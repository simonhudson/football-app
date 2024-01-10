import { makeRequest } from './utils';
import { SELECTED_LEAGUE } from '@/helpers/localStorage/keys';
import { get } from '@/helpers/localStorage';

export const getUpcomingFixtures = async () => {
	const response = await makeRequest({
		endpoint: 'fixtures',
		queryParams: {
			league: await get(SELECTED_LEAGUE),
			season: process.env.EXPO_PUBLIC_SEASON,
		},
	});
	return response;
};

export const getPastFixtures = async () => {
	const response = await makeRequest({
		endpoint: 'fixtures',
		queryParams: {
			league: await get(SELECTED_LEAGUE),
			season: process.env.EXPO_PUBLIC_SEASON,
		},
	});
	return response;
};
