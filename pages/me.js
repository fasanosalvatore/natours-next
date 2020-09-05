import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { publicFetch } from '../utils/publicFetch';
import { useAuth } from '../context/auth-context';
import axios from 'axios';

const NavItem = ({ link, text, icon, active }) => (
	<li className={`${active ? 'side-nav--active' : ''}`}>
		<Link href={link}>
			<a>
				<svg>
					<use xlinkHref={`img/icons.svg#icon-${icon}`} />
				</svg>
				{text}
			</a>
		</Link>
	</li>
);

const Account = ({ user }) => {
	// const user = useAuth((state) => state.user);

	// publicFetch('/users/me').then(console.log).catch(console.log);
	// console.log(user);
	const { register, handleSubmit } = useForm();
	if (!user) return <h1>Error Unhautorized</h1>;
	return (
		<main className="main">
			<div className="user-view">
				<nav className="user-view__menu">
					<ul className="side-nav">
						<NavItem link="#" text="Settings" icon="settings" active />
						<NavItem link="/my-tours" text="My Bookings" icon="briefcase" />
						<NavItem link="#" text="My reviews" icon="star" />
						<NavItem link="#" text="Billing" icon="credit-card" />
					</ul>
				</nav>
				<div className="user-view__content">
					<div className="user-view__form-container">
						<h2 className="heading-secondary ma-bt-md">
							Your account settings
						</h2>
						<form className="form form-user-data">
							<div className="form__group">
								<label className="form__label" for="name">
									Name
								</label>
								<input
									className="form__input"
									id="name"
									type="text"
									value={user.name}
									required="required"
								/>
							</div>
							<div className="form__group ma-bt-md">
								<label className="form__label" for="email">
									Email address
								</label>
								<input
									className="form__input"
									id="email"
									type="email"
									value={user.email}
									required="required"
								/>
							</div>
							<div className="form__group form__photo-upload">
								<img
									className="form__user-photo"
									src={`img/users/${user.photo}`}
									alt="User photo"
								/>
								<input
									className="form__upload"
									id="photo"
									type="file"
									accept="image/*"
									name="photo"
								/>
								<label for="photo">Choose new photo</label>
							</div>
							<div className="form__group right">
								<button className="btn btn--small btn--green">
									Save settings
								</button>
							</div>
						</form>
					</div>
					<div className="line">&nbsp;</div>
					<div className="user-view__form-container">
						<h2 className="heading-secondary ma-bt-md">Password change</h2>
						<form className="form form-user-settings">
							<div className="form__group">
								<label className="form__label" for="password-current">
									Current password
								</label>
								<input
									className="form__input"
									id="password-current"
									type="password"
									placeholder="••••••••"
									required="required"
									minlength="8"
								/>
							</div>
							<div className="form__group">
								<label className="form__label" for="password">
									New password
								</label>
								<input
									className="form__input"
									id="password"
									type="password"
									placeholder="••••••••"
									required="required"
									minlength="8"
								/>
							</div>
							<div className="form__group ma-bt-lg">
								<label className="form__label" for="password-confirm">
									Confirm password
								</label>
								<input
									className="form__input"
									id="password-confirm"
									type="password"
									placeholder="••••••••"
									required="required"
									minlength="8"
								/>
							</div>
							<div className="form__group right">
								<button className="btn btn--small btn--green btn--save-password">
									Save password
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};

Account.getInitialProps = async ({ req }) => {
	console.log(req);
	const res = await axios(
		'https://intense-bastion-46247.herokuapp.com/api/v1/users/me',
	);
	console.log(res);

	return {};
};

export default Account;
