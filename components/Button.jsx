const { default: styled } = require('styled-components');

export const Button = styled.a`
	&,
	&:link,
	&:visited {
		background-color: ${(props) => props.small && '#55c57a'};
		color: ${(props) => props.small && '#fff'};
		font-size: ${(props) => (props.small ? '1.4rem' : '1.6rem')};
		padding: ${(props) => (props.small ? '1.25rem 3rem' : '1.4rem 3rem')};
		/* transition: ${(props) => (props.small ? 'all 0.2s' : 'all 0.4s')}; */
		transition: all 0.4s;
		border-radius: 10rem;
		text-transform: uppercase;
		display: inline-block;
		text-decoration: none;
		position: relative;
		font-weight: 400;
		backface-visibility: hidden;
		border: none;
		cursor: pointer;
	}
	&:hover {
		/* background-color: ${(props) => props.small && '#7dd56f'}; */
		transform: translateY(-3px);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	}
	&:active {
		transform: translateY(-1px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}
	&:focus {
		outline: none;
		background-color: #2e864b;
	}
`;
