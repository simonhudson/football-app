import { makeRequest } from './utils';
import { SELECTED_LEAGUE } from '@/helpers/localStorage/keys';
import { get } from '@/helpers/localStorage';

export const getClubsByLeague = async () => {
	const response = await makeRequest({
		endpoint: 'teams',
		queryParams: {
			league: await get(SELECTED_LEAGUE),
			season: process.env.EXPO_PUBLIC_SEASON,
		},
	});
	return response;
};
