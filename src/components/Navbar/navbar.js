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
		<NavLink to='/TokenSide' activeStyle>
			Tokenside
		</NavLink>
		<NavLink to='/invest' activeStyle>
			Invest
		</NavLink>
		<NavLink to='/browse' activeStyle>
			Browse
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Signup
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
