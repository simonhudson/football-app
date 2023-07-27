import { Person } from './person';
import { Contract } from './contract';

export interface Staff extends Person {
	contract: Contract;
	firstName: string;
	lastName: string;
}
