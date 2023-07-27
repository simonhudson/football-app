import React from 'react';
import MainNavigation from './index';
import { screen, render } from '@testing-library/react';

describe('MainNavigation', () => {
	it(`should render expected links`, () => {
		// When
		initialise();

		// Then
		const links: HTMLElement[] = screen.getAllByRole('link');
		expect(links.length).toEqual(3);

		[{ href: '/', textContent: 'Home' }].forEach((link: { href: string; textContent: string }, index: number) => {
			expect(links[index]).toHaveAttribute('href', link.href);
			expect(links[index]).toHaveTextContent(link.textContent);
		});
	});

	const initialise = () => render(<MainNavigation />);
});
