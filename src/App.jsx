import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { AuthProvider } from './store/auth-context.jsx'; 

function App() {
	

	return(
		<Router>
			<AuthProvider>
				<AppRoutes/>
			</AuthProvider>
		</Router>
	);
}

export default App;