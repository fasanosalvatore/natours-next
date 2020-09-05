import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { publicFetch } from '../../utils/publicFetch';
import Head from 'next/head';

const OverviewBox = ({ label, text, icon }) => (
	<div className="overview-box__detail">
		<svg className="overview-box__icon">
			<use xlinkHref={`/img/icons.svg#icon-${icon}`} />
		</svg>
		<span className="overview-box__label">{label}</span>
		<span className="overview-box__text">{text}</span>
	</div>
);

const ReviewCard = ({ review }) => (
	<div className="reviews__card">
		<div className="reviews__avatar">
			<img
				className="reviews__avatar-img"
				src={`/img/users/${review.user.photo}`}
				alt="${review.user.name}"
			/>
			<h6 className="reviews__user">{review.user.name}</h6>
		</div>
		<p className="reviews__text">{review.review}</p>
		<div className="reviews__rating"></div>
	</div>
);

export default function Tour({ tour }) {
	const mapRef = useRef();
	const date = new Date(tour.startDates[0]).toLocaleString('en-us', {
		month: 'long',
		year: 'numeric',
	});

	useEffect(() => {
		if (mapRef.current) {
			mapboxgl.accessToken =
				'pk.eyJ1IjoiZmFzYW5vc2FsdmF0b3JlIiwiYSI6ImNrZHp0NmhkdDF4cGszMHNncnhwNXYzcDIifQ.8T9YrtkfrrwJ9bjk-aNhPw';
			var map = new mapboxgl.Map({
				container: mapRef.current,
				style: 'mapbox://styles/fasanosalvatore/ckdzte4hy0rso19pgspyu9jpj',
				scrollZoom: false,
			});

			const bounds = new mapboxgl.LngLatBounds();

			tour.locations.forEach((loc) => {
				const el = document.createElement('div');
				el.className = 'marker';
				new mapboxgl.Marker({
					element: el,
					anchor: 'bottom',
				})
					.setLngLat(loc.coordinates)
					.addTo(map);

				new mapboxgl.Popup({
					offset: 30,
				})
					.setLngLat(loc.coordinates)
					.setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
					.addTo(map);

				bounds.extend(loc.coordinates);
			});

			map.fitBounds(bounds, {
				padding: {
					top: 200,
					bottom: 150,
					left: 100,
					right: 100,
				},
			});
			return () => {
				map.remove();
			};
		}
	}, []);

	return (
		<>
			<Head>
				<link
					href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
					rel="stylesheet"
				/>
			</Head>
			<section className="section-header">
				<div className="header__hero">
					<div className="header__hero-overlay">&nbsp;</div>
					<img
						className="header__hero-img"
						src={`/img/tours/${tour.imageCover}`}
						alt={tour.name}
					/>
				</div>
				<div className="heading-box">
					<h1 className="heading-primary">
						<span>{tour.name}</span>
					</h1>
					<div className="heading-box__group">
						<div className="heading-box__detail">
							<svg className="heading-box__icon">
								<use xlinkHref="/img/icons.svg#icon-clock"></use>
							</svg>
							<span className="heading-box__text">{`${tour.duration} days`}</span>
						</div>
						<div className="heading-box__detail">
							<svg className="heading-box__icon">
								<use xlinkHref="/img/icons.svg#icon-map-pin"></use>
							</svg>
							<span className="heading-box__text">
								{tour.startLocation.description}
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className="section-description">
				<div className="overview-box">
					<div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
							<OverviewBox label="Next Date" text={date} icon="calendar" />
							<OverviewBox
								label="Difficulty"
								text={tour.difficulty}
								icon="trending-up"
							/>
							<OverviewBox
								label="Participants"
								text={`${tour.maxGroupSize} people`}
								icon="user"
							/>
							<OverviewBox
								label="Rating"
								text={`${tour.ratingsAverage} / 5`}
								icon="star"
							/>
						</div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
							{tour.guides.map((guide) => (
								<div className="overview-box__detail" key={guide.name}>
									<img
										src={`/img/users/${guide.photo}`}
										alt={`${guide.name}`}
										className="overview-box__img"
									/>
									<span className="overview-box__label">
										{guide.role === 'lead-guide' ? 'Lead Guide' : 'Tour Guide'}
									</span>
									<span className="overview-box__text">{guide.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="description-box">
					<h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
					{tour.description.split('\n').map((p) => (
						<p className="description__text">{p}</p>
					))}
				</div>
			</section>
			<section className="section-pictures">
				{tour.images.map((image, i) => (
					<div className="picture-box">
						<img
							src={`/img/tours/${image}`}
							alt={`${tour.name}-${i + 1}`}
							className={`picture-box__img picture-box__img--${i + 1}`}
						/>
					</div>
				))}
			</section>
			<section className="section-map">
				<div id="map" ref={mapRef} />
			</section>
			<section className="section-reviews">
				<div className="reviews">
					{tour.reviews?.map((review) => (
						<ReviewCard review={review} />
					))}
				</div>
			</section>
			<section className="section-cta">
				<div className="cta">
					<div className="cta__img cta__img--logo">
						<img src="/img/logo-white.png" alt="Natours Logo" />
					</div>
					<img
						src={`/img/tours/${tour.images[1]}`}
						alt="Tour Picture"
						className="cta__img cta__img--1"
					/>
					<img
						src={`/img/tours/${tour.images[2]}`}
						alt="Tour Picture"
						className="cta__img cta__img--2"
					/>
					<div className="cta__content">
						<h2 className="heading-secondary">What are you waiting for?</h2>
						<p className="cta__text">
							{tour.duration} days. 1 adventure. Infinite memories. Make it
							yours today!
						</p>
						<button
							id="book-tour"
							className="btn btn--green span-all-rows"
							data-tour-id={tour.id}
						>
							Book tour now!
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export async function getStaticPaths() {
	const res = await publicFetch('tours');
	return {
		paths: res.data.data.data.map((tour) => ({
			params: {
				slug: tour.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await publicFetch(`tours?slug[eq]=${params.slug}`);
	return {
		props: { tour: res.data.data.data[0] },
	};
}
