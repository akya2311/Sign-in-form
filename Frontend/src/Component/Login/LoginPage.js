import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (jwtToken) => {
    login(jwtToken);
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/login`;
      const response = await axios.post(apiUrl, { email, password });
      const jwtToken = response.data.token;
      if (response.status === 200) {
        handleLogin(jwtToken);
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const onClickSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button
          className="login-button signup-button"
          onClick={onClickSignin}
        >
          Sign Up
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
