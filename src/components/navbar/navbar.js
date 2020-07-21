import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LeftNavbar = styled.div`
	width: 30vw;
	display: flex;
	justify-content: space-around;
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<h1>Ninja Analytics</h1>
			<LeftNavbar>
				<h1>Features</h1>
				<h1>Navbar</h1>
				<Link to='/dashboard'>
					<button>Try it</button>
				</Link>
			</LeftNavbar>
		</NavbarWrapper>
	);
};

export default Navbar;
