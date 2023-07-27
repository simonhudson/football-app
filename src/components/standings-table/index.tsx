import { StandingPosition } from './standings';

type Props = {
	data: StandingPosition[];
	viewExpanded?: boolean;
};

const StandingsTable = ({ data, viewExpanded }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th id="position">Position</th>
					<th id="team">Team</th>
					<th id="points">Points</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item: StandingPosition) => {
					return (
						<tr key={`standing--${item.position}`}>
							<td headers="position">{item.position}</td>
							<td headers="team">{item.team.name}</td>
							<td headers="points">{item.points}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default StandingsTable;
