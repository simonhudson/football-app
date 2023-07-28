import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const MainInfo = styled.div`
	display: flex;
`;

export const DefList = styled.dl`
	padding: 0 0 0 ${rem(20)};
`;

export const DefTitle = styled.dt`
	font-weight: bold;
`;

export const DefData = styled.dd`
	margin: 0;
	padding: 0;
`;
