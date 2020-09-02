import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
	background-color: #f7f7f7;
	padding: 6rem 4rem 3rem 4rem;
	font-size: 1.4rem;
	display: grid;
	grid-template-columns: auto auto;
	grid-row-gap: 0.75rem;
	justify-content: space-between;
	@media only screen and (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-row-gap: 1.25rem;
		justify-items: center;
	}
`;

const Logo = styled.div`
	grid-row: 1 / 3;
	-ms-flex-item-align: center;
	align-self: center;
	@media only screen and (max-width: 50em) {
		grid-row: 1;
	}
	img {
		height: 3rem;
	}
`;

const FooterNav = styled.ul`
	list-style: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	li {
		margin-left: 1.5rem;
	}
	a {
		color: #777;
		text-decoration: none !important;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
	}
	a:hover,
	a:active {
		color: #55c57a;
	}
`;
const Copyright = styled.p`
	justify-self: end;
	color: #999;
	@media only screen and (max-width: 50em) {
		justify-self: center;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Logo>
				<img src="img/logo-green.png" alt="Natours Logo" />
			</Logo>
			<FooterNav>
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
			</FooterNav>
			<Copyright>&copy; by Salvatore Fasano. All rights reserved.</Copyright>
		</StyledFooter>
	);
};

export default Footer;
