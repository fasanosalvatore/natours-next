import { publicFetch } from '../utils/publicFetch';
import CardContainer from '../components/CardContainer';

export default function Home({ tours }) {
	return (
		<main className="main">
			<CardContainer tours={tours} />
		</main>
	);
}

export async function getStaticProps() {
	const res = await publicFetch('tours');
	return {
		props: { tours: res.data.data.data },
	};
}
