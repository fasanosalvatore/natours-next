import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav nav--tours">
				<Link href="/">
					<a className="nav__el">All tours</a>
				</Link>
			</nav>
			<div className="header__logo">
				<img src="/img/logo-white.png" alt="Natours logo" />
			</div>
			<nav className="nav nav--user">
				<Link href="/login">
					<a className="nav__el">Log in</a>
				</Link>
				<Link href="/signup">
					<a className="nav__el nav__el--cta">Sign up</a>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
