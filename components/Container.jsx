import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Container;
