import React from 'react';
import { useAuth } from '../../store/auth-context';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css'
function Login() {
    const { authState, login } = useAuth();

    return (
        <div> 
            <Navbar/>   
            <div className="main-content">
                <div className="center-box-login">
                    <h1>Login</h1>
                    <p>Enter your credentials to log in:</p>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label  htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <br/>
                    <button className="login-button" onClick={() => login(document.getElementById('username').value, document.getElementById('password').value)}>
                        Login
                    </button>
                    <p>Status: {authState.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;