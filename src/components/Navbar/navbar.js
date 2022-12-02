import React from 'react';
import './navbar.css';
const Navbar = ()=>{
	return(
	<div class="nav">
  	<div class="nav-header">
    	<div class="nav-title">
      	TOKENSIDE
    	</div>
 	 </div>
  	<div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  	</div>
  
  <div class="nav-links">
    <a href="/invest" target="_self">Invest</a>
    <a href="/browse" target="_self">Browse</a>
    <a href="/signup" target="_self">SignUp</a>
    <a href="/signin" target="_self">SignIn</a>
  </div>
</div>
	);
}

export default Navbar;