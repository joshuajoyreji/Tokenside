import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/invest' activeStyle>
			About
		</NavLink>
		<NavLink to='/browse' activeStyle>
			Events
		</NavLink>c
		<NavLink to='/signup' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/TokenSide' activeStyle>
			Teams
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
