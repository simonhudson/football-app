import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import MainNavigation from '@/components/main-navigation';
import '@/styles/global.css';
import styled, { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const AppWrapper = styled.div`
	height: 100vh;
	margin: 0 auto;
	width: 80%;
`;

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<StyleSheetManager shouldForwardProp={isPropValid}>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Wedding App</title>
			</Head>
			<AppWrapper>
				<MainNavigation />
				<main>
					<Component {...pageProps} />
				</main>
			</AppWrapper>
		</StyleSheetManager>
	);
};

export default App;
