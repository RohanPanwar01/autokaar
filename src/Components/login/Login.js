import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default CSS for the popup
import './login.css'; // Import your custom CSS for additional styling
import logo from './cabbb.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = ({ onLoginSuccess }) => {
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [error, setError] = useState('');

    useEffect(() => {
        // Add blur effect to the background when the popup is open
        const body = document.body;
        body.classList.add('blur-background');

        // Clean up blur effect when the popup is closed
        return () => {
            body.classList.remove('blur-background');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (adminId === 'caribbeaneaze23@gmail.com' && password === 'Sher@404') {
            setError('');
            onLoginSuccess(); // Notify parent component about successful login
        } else {
            setError('Invalid Admin ID or Password');
        }
    };

    return (
        <Popup
            modal
            closeOnDocumentClick={false}
            open
            overlayStyle={{ height: '100vh', width: '100vw', top: 0, left: 0, backgroundColor: 'transparent' }}
            contentStyle={{ height: 'auto', width: '100vw', padding: '0', margin: '0', backgroundColor: 'transparent' }}
        >
            {(close) => (
                <div className='blur'>
                    <div className="admin-login-container">
                        {/* Logo Image */}
                        <img src={logo} alt="Logo" className="login-logo" />

                        <h2>Admin Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="adminId">Admin ID</label>
                                <input
                                    type="text"
                                    id="adminId"
                                    value={adminId}
                                    onChange={(e) => setAdminId(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? 'text' : 'password'} // Toggle input type
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span 
                                        className="password-toggle-icon" 
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
                                    </span>
                                </div>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <button className='bt234' type="submit">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default Login;
