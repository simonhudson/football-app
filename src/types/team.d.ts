import { Competition } from './competition';
import { Player } from './player';
import { Staff } from './staff';
import { Contract } from './contract';

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
	coach: Staff;
	founded: number;
	lastUpdated: string;
	runningCompetitions: Competition[];
	squad: Player[];
	staff: Staff[];
	venue: string;
	website: string;
}
