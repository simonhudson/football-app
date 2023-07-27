import React, { useEffect, useState } from 'react';
import { Nav, NavToggle, NavList, NavItem, NavLink } from './index.styles';

const MainNavigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const closeNavigation = () => setIsOpen(false);

	return (
		<>
			<NavToggle
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
			>
				Menu
			</NavToggle>
			<Nav isOpen={isOpen}>
				<NavList>
					{[{ href: '/', text: 'Home' }].map((item: { href: string; text: string }, index: number) => {
						return (
							<NavItem key={`main-navigation--${item.text}`}>
								<NavLink href={item.href} onClick={() => closeNavigation()}>
									{item.text}
								</NavLink>
							</NavItem>
						);
					})}
				</NavList>
			</Nav>
		</>
	);
};

export default MainNavigation;
