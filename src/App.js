import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
import Home from './pages/Home/home'; 
import Invest from './pages/Invest/invest'; 
import Signup from './pages/Signup/signup'; 
import Navbar from './components/Navbar/navbar';
import Signin from './pages/Signin/signin'; 
import Startup from './pages/startup/startup';
import CreateStartup from './pages/CreateStartup/createstartup';
function App() {
return (
  <div className="App">
    <BrowserRouter>
  	<Navbar/>
  	<Routes>
  		<Route path='/' element={<Home/>} />
      <Route path='/browse' element={<h1>browse</h1>} />
  		 <Route path='/invest' element={<Invest/>} />
  		 <Route path='/signin' element={<Signin/>} />
  		 <Route path='/signup' element={<Signup/>} />
		   <Route path='/startup/:id' element={<Startup/>} />
		   <Route path='/createstartup' element={<CreateStartup/>}/>
  	</Routes>
    </BrowserRouter>
  </div>
);
}

export default App;