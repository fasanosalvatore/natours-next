import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../context/auth-context';
import { publicFetch } from '../utils/publicFetch';

const Header = () => {
	const router = useRouter();
	const [user, setUser] = useAuth((state) => [state.user, state.setUser]);
	const handleLogout = async () => {
		setUser(undefined);
		await publicFetch('/users/logout');
		router.push('/');
	};
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
				{user ? (
					<>
						<button className="nav__el nav__el--logout" onClick={handleLogout}>
							Logout
						</button>
						<Link href="/me">
							<a href="" className="nav__el">
								<img
									src={`/img/users/${user.photo}`}
									alt="User photo"
									className="nav__user-img"
								/>
								<span>{user.name.split(' ')[0]}</span>
							</a>
						</Link>
					</>
				) : (
					<>
						<Link href="/login">
							<a className="nav__el">Log in</a>
						</Link>
						<Link href="/signup">
							<a className="nav__el nav__el--cta">Sign up</a>
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
