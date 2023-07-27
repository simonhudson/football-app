import styled, { css } from 'styled-components';
import { rem } from 'polished';

const BORDER = `border: 1px solid #dadada;`;

export const Table = styled.table`
	${BORDER}
	border-collapse: collapse;
`;

export const TableRow = styled.tr`
	&:nth-of-type(2n) {
		background: #eaeaea;
	}
`;

export const TableHeading = styled.th`
	${BORDER}
	padding: ${rem(10)};
	text-align: left;
`;

export const TableCell = styled.td`
	${BORDER}
	padding: ${rem(10)};
`;
