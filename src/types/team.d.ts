import { Competition } from './competition';
import { Player } from './player';
import { Staff } from './staff';
export type TeamBasic = {
	crest: string;
	id: number;
	name: string;
	shortName: string;
	tla: string;
};

export interface TeamExtended extends TeamBasic {
	address: string;
	area: {
		code: string;
		flag: string;
		id: number;
		name: string;
	};
	clubColors: string;
	coach: {
		contract: {
			start: string;
			until: string;
		};
		dateOfBirth: string;
		firstName: string;
		id: number;
		lastName: string;
		name: string;
		nationality: string;
	};
	founded: number;
	lastUpdated: string;
	runningCompetitions: Competition[];
	squad: Player[];
	staff: Staff[];
	venue: string;
	website: string;
}
