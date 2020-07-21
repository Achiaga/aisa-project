import React from 'react';
import styled from 'styled-components';

import Navbar from './navbar/navbar';
import HeaderIntro from './header/headerIntro';

const AppWrapper = styled.div``;

function Home() {
	return (
		<AppWrapper>
			<Navbar />
			<HeaderIntro />
		</AppWrapper>
	);
}

export default Home;
