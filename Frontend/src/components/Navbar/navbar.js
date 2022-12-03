import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
const Navbar = ()=>{
  if(localStorage.getItem("token")=="xxx"){
	return(
	<div class="nav">
  	<div class="nav-header">
    	<div class="nav-title">
      	<a href="/" target="_self">TOKENSIDE</a>
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
    <Link onClick={()=>{localStorage.removeItem("token"); localStorage.removeItem("userId"); window. location.href = "/";}} to="/">
      Logout
    </Link>
  </div>
</div>
	);
}
else{
  return(
    <div class="nav">
      <div class="nav-header">
        <div class="nav-title">
        <a href="/" target="_self">TOKENSIDE</a>
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
}

export default Navbar;