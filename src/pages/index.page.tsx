import { useEffect, useState } from 'react';
import StandingsTable from '@/components/standings-table';
import Standings, { StandingPosition } from '@/components/standings-table/standings';

export async function getStaticProps() {
	let data;
	const response = await fetch(`${process.env.API_URL}competitions/PL/standings?season=2022`, {
		headers: { 'X-Auth-Token': process.env.API_TOKEN },
	});
	data = await response.json();

	return {
		props: {
			data,
		},
	};
}

const Home = ({ data }: Standings) => {
	console.log('----------------');
	console.log(data);
	console.log('----------------');

	const [currentStandings, setCurrentStandings] = useState<StandingPosition[] | null>(null);
	const [seasonYear, setSeasonYear] = useState<string | null>(null);
	const [viewExpandedTable, setViewExpandedTable] = useState<boolean>(false);

	useEffect(() => {
		setCurrentStandings(data.standings[0].table);
		setSeasonYear(`${data.season.startDate.slice(0, 4)}/${data.season.endDate.slice(2, 4)}`);
	}, [data]);

	return (
		<>
			<h1>
				{data.competition.name}: {seasonYear}
			</h1>
			{currentStandings && <StandingsTable data={currentStandings} viewExpanded={viewExpandedTable} />}
		</>
	);
};

export default Home;
