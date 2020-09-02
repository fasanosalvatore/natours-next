import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
	background-color: #444;
	padding: 0 5rem;
	height: 8rem;
	position: relative;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	flex: 0 1 40%;
	justify-content: ${(props) => (props.user ? 'flex-end' : null)};
	@media only screen and (max-width: 37.5em) {
		flex-direction: column;
	}
`;

const Logo = styled.div`
	& > img {
		height: 3.5rem;
	}
	@media only screen and (max-width: 62.5em) {
		-webkit-box-ordinal-group: 0;
		-ms-flex-order: -1;
		order: -1;
		margin-bottom: 1.5rem;
	}
`;

const StyledLink = styled.a`
	color: #f7f7f7;
	text-transform: uppercase;
	font-size: 1.6rem;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	transition: all 0.2s;
	font-weight: 400;
	background: none;
	border: none;
	cursor: pointer;
	font-family: inherit;
	padding: ${(props) => props.cta && '1rem 3rem'};
	border-radius: ${(props) => props.cta && '10rem'};
	border: ${(props) => props.cta && '1px solid currentColor !important'};
	transition: ${(props) => props.cta && 'all 0.3s'};
	&:hover,
	&:active {
		transform: translateY(-2px);
		text-shadow: 0 0.7rem 1rem black;
		background-color: ${(props) => props.cta && '#f7f7f7'};
		color: ${(props) => props.cta && '#777'};
		text-shadow: ${(props) => props.cta && 'none'};
		border-color: ${(props) => props.cta && '#f7f7f7'};
	}
	&:focus {
		outline: none;
	}
	&:not(:last-child) {
		margin-right: 3rem;
	}
	@media only screen and (max-width: 37.5em) {
		&:not(:last-child) {
			margin-right: 0;
			margin-bottom: 1.2rem;
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Navigation tours>
				<Link href="/">
					<StyledLink>All tours</StyledLink>
				</Link>
			</Navigation>
			<Logo>
				<img src="img/logo-white.png" alt="Logo white" />
			</Logo>
			<Navigation user>
				<Link href="/login">
					<StyledLink>Login</StyledLink>
				</Link>
				<Link href="/signup">
					<StyledLink cta>Sign up</StyledLink>
				</Link>
			</Navigation>
		</StyledHeader>
	);
};

export default Header;
