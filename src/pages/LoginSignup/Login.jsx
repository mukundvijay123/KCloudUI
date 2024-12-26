import React, { useEffect } from 'react';
import { useAuth } from '../../store/auth-context';// Assuming the context is in this file

function Login() {
    const { authState, login, test } = useAuth();

    
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => test("hello")}>Login</button>
            <p>Username: {authState.company_username}</p>
            <p>Status: {authState.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
        </div>
    );
}

export default Login;
