import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCardContainer = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 7rem;
`;

const CardContainer = React.memo(({ tours }) => {
	return (
		<StyledCardContainer>
			{tours.map((tour) => (
				<Card key={tour._id} tour={tour} />
			))}
		</StyledCardContainer>
	);
});

export default CardContainer;
