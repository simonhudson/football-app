import { TeamBasic } from '@/types/team';

export type StandingPosition = {
	draw: number;
	form: string;
	goalDifference: number;
	goalsAgainst: number;
	goalsFor: number;
	lost: number;
	playedGames: number;
	points: number;
	position: number;
	team: TeamBasic;
	won: number;
};

type Standing = {
	group: string | null;
	stage: string;
	table: StandingPosition[];
	type: string;
};

type Standings = {
	data: {
		area: {
			code: string;
			flag: string;
			id: number;
			name: string;
		};
		competition: {
			code: string;
			emblem: string;
			id: number;
			name: string;
			type: string;
		};
		filters: {
			season: string;
		};
		season: {
			currentMatchday: number;
			endDate: string;
			id: number;
			startDate: string;
		};
		standings: Standing[];
	};
};

export default Standings;
