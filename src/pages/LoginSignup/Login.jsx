import React, { useState } from 'react';
import { useAuth } from '../../store/auth-context';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';

function Login() {
    const { authState, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!authState.isLoggedIn) {
        return (
            <div>
                <Navbar />
                <div className="main-content">
                    <div className="center-box-login">
                        <h1>Login</h1>
                        <p>Enter your credentials to log in:</p>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <button
                            className="login-button"
                            onClick={() => login(username, password)}
                        >
                            Login
                        </button>
                        <p>Status: {authState.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <div className="main-content">
                    <div className="center-box-login">
                        <h3>You are logged in 😊</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
