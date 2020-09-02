import { publicFetch } from '../utils/publicFetch';
import styled from 'styled-components';
import CardContainer from '../components/CardContainer';

const Main = styled.main`
	background-color: #f7f7f7;
	padding: 8rem 6rem;
	flex: 1;
	position: relative;
`;

export default function Home({ tours }) {
	return (
		<Main>
			<CardContainer tours={tours} />
		</Main>
	);
}

export async function getStaticProps(context) {
	const res = await publicFetch('tours');
	return {
		props: { tours: res.data.data.data },
	};
}
