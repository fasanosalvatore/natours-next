import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<img src="/img/logo-green.png" alt="Natours logo" />
			</div>
			<ul className="footer__nav">
				<li>
					<Link href="#">
						<a>About us</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Download apps</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Become a guide</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Careers</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
			<p className="footer__copyright">
				&copy; by Salvatore Fasano. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
