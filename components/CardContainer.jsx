import React from 'react';

import Card from './Card';

const CardContainer = React.memo(({ tours }) => {
	return (
		<div className="card-container">
			{tours.map((tour) => (
				<Card key={tour._id} tour={tour} />
			))}
		</div>
	);
});

export default CardContainer;
