import type { Team } from './team';
import type { Venue } from './venue';

export interface Club extends Team, Venue {}
