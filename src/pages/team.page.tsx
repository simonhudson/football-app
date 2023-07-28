import { NextPageContext } from 'next';
import { TeamExtended } from '@/types/team';
import Image from 'next/image';
import { MainInfo, DefList, DefTitle, DefData } from './team.styles';

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
	console.log('----------------');
	console.log(data);
	console.log('----------------');

	return (
		<>
			<h1>{data.name}</h1>
			<MainInfo>
				<Image alt={`${data.name} crest`} height="150" src={data.crest} width="150" />
				<DefList>
					<DefTitle>Founded:</DefTitle>
					<DefData>{data.founded}</DefData>
					<DefTitle>Home Ground:</DefTitle>
					<DefData>{data.venue}</DefData>
				</DefList>
			</MainInfo>
		</>
	);
};

export default Team;
