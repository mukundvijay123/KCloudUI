import React, { useEffect } from 'react';
import { useAuth } from '../../store/auth-context';// Assuming the context is in this file

function Login() {
    const { authState, login } = useAuth();

    
    return (
        <div>
            <h1>Login</h1>
            <p>Username: {authState.company_username}</p>
            <input></input>
            <button onClick={() => login("company","password")}>Login</button>
            
            <p>Status: {authState.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
        </div>
    );
}

export default Login;
