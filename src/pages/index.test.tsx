import React from 'react';
import Home from './index.page';
import { screen, render } from '@testing-library/react';

describe('Home', () => {
	it(`should render expected heading`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('heading')).toHaveTextContent('Home');
	});

	const initialise = () => render(<Home />);
});
