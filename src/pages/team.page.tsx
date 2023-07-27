import { NextPageContext } from 'next';
import { TeamExtended } from '@/types/team';

export async function getServerSideProps(ctx: NextPageContext) {
	let data;
	const response = await fetch(`${process.env.API_URL}teams/${ctx.query.id}`, {
		headers: { 'X-Auth-Token': process.env.API_TOKEN! },
	});
	data = await response.json();

	return {
		props: {
			data,
		},
	};
}

const Team = ({ data }: TeamExtended | any) => {
	return (
		<>
			<h1>{data.name}</h1>
		</>
	);
};

export default Team;
