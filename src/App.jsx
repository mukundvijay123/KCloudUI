import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
	return(
		<Router>
			<Navbar/>
			
		</Router>
	);
}

export default App

//<AppRoutes/> put it in between Router