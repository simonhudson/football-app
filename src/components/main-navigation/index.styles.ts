import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import zIndex from '@/helpers/z-index';

const SPACING = rem(20);
const BORDER = `1px solid #ddd;`;

type NavProps = {
	isOpen: boolean;
};

export const Nav = styled.nav<NavProps>`
	background: #fff;
	box-shadow: 0 0 5px #555;
	height: 100vh;
	padding: 0;
	position: absolute;
	right: ${(props) => (props.isOpen ? '0' : '-100%')};
	top: 0;
	transition: all 0.5s 0.25s;
	width: 75vw;
	z-index: ${zIndex('main-navigation')};

	@media only screen and (min-width: 800px) {
		right: ${(props) => (props.isOpen ? '0' : '-40%')};
		width: 30vw;
	}
`;

export const NavToggle = styled.button`
	position: absolute;
	right: ${SPACING};
	top: ${SPACING};
	z-index: ${zIndex('main-navigation-toggle')};
`;

export const NavList = styled.ul`
	border-top: ${BORDER};
	list-style: none;
	margin: ${rem(60)} 0 0;
	padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
	border-bottom: ${BORDER};
	display: block;
	font-weight: bold;
	padding: ${SPACING};
`;
