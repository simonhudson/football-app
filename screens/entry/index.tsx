import { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import { EntryWrap } from './index.styles';
import { PREMIER_LEAGUE, EFL_CHAMPIONSHIP, EFL_LEAGUE_ONE } from '@/constants/leagues';
import { get, set } from '@/helpers/localStorage';
import { SELECTED_LEAGUE, SELECTED_CLUB } from '@/helpers/localStorage/keys';
import { getClubsByLeague } from '@/helpers/api/getClubsByLeague';

export const ChooseLeague = ({ navigation }) => {
	useEffect(() => {
		(async () => {
			const selectedClub = await get(SELECTED_CLUB);
			console.log('selectedClub----------------');
			console.log(selectedClub);
			console.log('/selectedClub----------------');

			// if (selectedClub) {
			// 	return navigation.navigate('ClubOverview', { club: selectedClub });
			// } else {
			// 	console.log('Select club plz');
			// }
		})();
	}, []);

	const selectLeague = (leagueId: number) => {
		set({ key: SELECTED_CLUB, value: leagueId });
		navigation.navigate('ChooseClub');
	};

	return (
		<EntryWrap>
			<Text>Choose your League</Text>
			<Button title={PREMIER_LEAGUE.name} onPress={() => selectLeague(PREMIER_LEAGUE.id)}></Button>
			<Button title={EFL_CHAMPIONSHIP.name} onPress={() => selectLeague(EFL_CHAMPIONSHIP.id)}></Button>
			<Button title={EFL_LEAGUE_ONE.name} onPress={() => selectLeague(EFL_LEAGUE_ONE.id)}></Button>
		</EntryWrap>
	);
};

export const ChooseClub = ({ navigation }) => {
	const [selectedLeague, setSelectedLeague] = useState<string | undefined>();
	const [clubs, setClubs] = useState();

	const selectClub = (club) => {
		set({ key: SELECTED_CLUB, value: club });
		navigation.navigate('ClubOverview', { club });
	};

	useEffect(() => {
		(async () => {
			setSelectedLeague(await get(SELECTED_LEAGUE));
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (selectedLeague) {
				const leagueClubs = await getClubsByLeague();
				console.log('zz----------------');
				console.log(leagueClubs);
				console.log('z/z----------------');

				setClubs(leagueClubs.response);
			}
		})();
	}, [selectedLeague]);

	return selectedLeague && clubs ? (
		<EntryWrap>
			<Text>Choose your Club from {selectedLeague}</Text>
			{clubs.map((club, index) => {
				return <Button key={`club-${index}`} title={club.team.name} onPress={() => selectClub(club)}></Button>;
			})}
		</EntryWrap>
	) : null;
};
