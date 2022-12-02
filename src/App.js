import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Home,Browse,Invest,Signin,Signup} from './pages'; 
import {Navbar} from './components';
function App() {
return (
  <div className="App">
<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='/' element ={<Home/>} />
		<Route path='/browse' element={<Browse/>} />
		<Route path='/invest' element={<Invest/>} />
		<Route path='/signin' element={<Signin/>} />
		<Route path='/signup' component={<Signup/>} />
	</Routes>
  </BrowserRouter>
  </div>
);
}

export default App;
