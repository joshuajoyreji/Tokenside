import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
import Home from './pages/Home/home'; 
import Navbar from './components/Navbar/navbar';
function App() {
return (
  <div className="App">
    <BrowserRouter>
  	<Navbar/>
  	<Routes>
  		<Route path='/' element={<Home/>} />
      <Route path='/browse' element={<h1>browse</h1>} />
  		 <Route path='/invest' element={<h1>browse</h1>} />
  		 <Route path='/signin' element={<h1>browse</h1>} />
  		 <Route path='/signup' element={<h1>browse</h1>} />
  	</Routes>
    </BrowserRouter>
  </div>
);
}

export default App;