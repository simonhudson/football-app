import { useState } from 'react';
import { StandingPosition } from './standings';
import { Table, TableRow, TableHeading, TableCell } from './index.styles';
import Link from 'next/link';

type Props = {
	data: StandingPosition[];
};

const StandingsTable = ({ data }: Props) => {
	const [viewExpanded, setViewExpanded] = useState<boolean>(false);

	const collapsedHeaders = (
		<>
			<TableHeading id="position">Position</TableHeading>
			<TableHeading id="team">Team</TableHeading>
			<TableHeading id="points">Points</TableHeading>
		</>
	);

	const expandedHeaders = (
		<>
			<TableHeading id="played">Played</TableHeading>
			<TableHeading id="won">Won</TableHeading>
			<TableHeading id="draw">Draw</TableHeading>
			<TableHeading id="lost">Lost</TableHeading>
			<TableHeading id="form">Form</TableHeading>
			<TableHeading id="goal-difference">+/-</TableHeading>
		</>
	);

	const TableHeadings = viewExpanded ? (
		<>
			{collapsedHeaders}
			{expandedHeaders}
		</>
	) : (
		<>{collapsedHeaders}</>
	);

	const collapsedData = (item: StandingPosition) => (
		<>
			<TableCell headers="position">{item.position}</TableCell>
			<TableCell headers="team">
				<Link href={`/team?id=${item.team.id}`}>{item.team.name}</Link>
			</TableCell>
			<TableCell headers="points">{item.points}</TableCell>
		</>
	);

	const expandedData = (item: StandingPosition) => (
		<>
			<TableCell headers="played">{item.playedGames}</TableCell>
			<TableCell headers="won">{item.won}</TableCell>
			<TableCell headers="draw">{item.draw}</TableCell>
			<TableCell headers="lost">{item.lost}</TableCell>
			<TableCell headers="form">{item.form}</TableCell>
			<TableCell headers="goal-difference">{item.goalDifference}</TableCell>
		</>
	);

	const tableData = (item: StandingPosition) =>
		viewExpanded ? (
			<>
				{collapsedData(item)}
				{expandedData(item)}
			</>
		) : (
			<>{collapsedData(item)}</>
		);

	return (
		<>
			<button onClick={() => setViewExpanded(!viewExpanded)}>
				View {viewExpanded ? 'collapsed' : 'expanded'} table
			</button>
			<Table>
				<thead>
					<TableRow>{TableHeadings}</TableRow>
				</thead>
				<tbody>
					{data.map((item: StandingPosition) => {
						return <TableRow key={`standing--${item.position}`}>{tableData(item)}</TableRow>;
					})}
				</tbody>
			</Table>
		</>
	);
};

export default StandingsTable;
