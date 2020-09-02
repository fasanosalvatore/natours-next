//import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Container from '../components/Container';

const GlobalStyle = createGlobalStyle`
	:root {
		--section-rotate: 9vw;
	}

	::selection {
		background-color: #55c57a;
		color: #fff;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
	}
	html{font-size: 62.5%;}
  body {
    line-height: 1.6;
		font-weight: 300;
		font-family: 'Lato', sans-serif;
		color: #777;
		padding: 3rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
`;

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
