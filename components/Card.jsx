import React from 'react';
import styled from 'styled-components';
import { HeadingTertiary } from './Headings';
import Link from 'next/link';
import { Button } from './Button';

const StyledCard = styled.div`
	border-radius: 3px;
	overflow: hidden;
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: 0.3s all;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
`;

const CardHeader = styled.div`
	position: relative;
	> div {
		position: relative;
		clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
		height: 22rem;
		> div {
			position: absolute;
			width: 100%;
			height: 100%;
			background-image: -webkit-gradient(
				linear,
				left top,
				right bottom,
				from(#7dd56f),
				to(#28b487)
			);
			background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
			opacity: 0.7;
		}
		> img {
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}
`;

const CardDetails = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 1.75rem;
	grid-column-gap: 2rem;
	padding: 2.5rem 3rem;
	> h4 {
		font-size: 1.2rem;
		text-transform: uppercase;
		font-weight: 700;
		grid-column: 1 / -1;
	}
	> p {
		grid-column: 1 / -1;
		font-size: 1.5rem;
		font-style: italic;
		margin-top: -1rem;
		margin-bottom: 0.75rem;
	}
	> div {
		font-size: 1.3rem;
		display: flex;
		align-items: center;
		> svg {
			margin-right: 0.7rem;
			height: 2rem;
			width: 2rem;
			fill: #55c57a;
		}
	}
`;

const CardFooter = styled.div`
	background-color: #f7f7f7;
	padding: 2.5rem 3rem;
	border-top: 1px solid #f1f1f1;
	font-size: 1.4rem;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	margin-top: auto;
	a {
		grid-row: 1 / 3;
		justify-self: end;
		-ms-flex-item-align: center;
		align-self: center;
	}
`;

const Card = React.memo(({ tour }) => {
	return (
		<StyledCard>
			<CardHeader>
				<div>
					<div>&nbsp;</div>
					<img src={`img/tours/${tour.imageCover}`} alt={tour.name} />
				</div>
				<HeadingTertiary>
					<span>{tour.name}</span>
				</HeadingTertiary>
			</CardHeader>
			<CardDetails>
				<h4>{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
				<p>{tour.summary}</p>
				<div>
					<svg>
						<use xlinkHref="img/icons.svg#icon-map-pin" />
					</svg>
					<span>{tour.startLocation.description}</span>
				</div>
				<div>
					<svg>
						<use xlinkHref="img/icons.svg#icon-calendar" />
					</svg>
					<span>
						{new Date(tour.startDates[0]).toLocaleString('en-us', {
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
				<div>
					<svg>
						<use xlinkHref="img/icons.svg#icon-flag" />
					</svg>
					<span>{`${tour.locations.length} stops`}</span>
				</div>
				<div>
					<svg>
						<use xlinkHref="img/icons.svg#icon-user" />
					</svg>
					<span>{`${tour.maxGroupSize} people`}</span>
				</div>
			</CardDetails>
			<CardFooter>
				<p>
					<span style={{ fontWeight: 700 }}>{`$${tour.price} `}</span>
					<span style={{ color: '#999' }}>per person</span>
				</p>
				<p style={{ gridRow: '2/3' }}>
					<span style={{ fontWeight: 700 }}>{tour.ratingsAverage}</span>
					<span
						style={{ color: '#999' }}
					>{` rating (${tour.ratingsQuantity})`}</span>
				</p>
				<Link href={`/tour/${tour.slug}`}>
					<Button small>Details</Button>
				</Link>
			</CardFooter>
		</StyledCard>
	);
});

export default Card;
