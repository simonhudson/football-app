import { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';
import { Wrap } from '@/theme/layout';
import { H1 } from '@/theme/typography';
import { Banner, BannerImage } from './index.styles';
import { getUpcomingFixtures, getPastFixtures } from '@/helpers/api/fixtures';

export const ClubOverview = ({ route }) => {
	const { club } = route.params;

	const [fixtures, setFixtures] = useState({ upcoming: null, past: null });

	useEffect(() => {
		(async () => {
			const upcomingFixtures = await getUpcomingFixtures();
			const pastFixtures = await getPastFixtures();
			setFixtures({
				upcoming: upcomingFixtures.response,
				past: pastFixtures.response,
			});
		})();
	}, []);

	return fixtures.upcoming || fixtures.past ? (
		<Wrap>
			<Banner>
				<BannerImage source={{ uri: club.team.logo }} />
				<H1>{club.team.name}</H1>
			</Banner>
		</Wrap>
	) : null;
};
