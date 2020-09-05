//import 'normalize.css';
import Head from 'next/head';
import Container from '../components/Container';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
