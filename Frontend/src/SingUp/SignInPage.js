import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/register`;
      const response = await axios.post(apiUrl, { name, email, password });
      if (response.status === 201) {
        setSuccessMessage('User successfully signed up!');
        setTimeout(() => {
          navigate('/'); // Redirect to login page after 2 seconds
        }, 2000);
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const onClickLogin = () => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="sign-in-container">
      <div className="form-wrapper">
        <h1>Welcome</h1>
        <p className="subtitle">Create your account to get started!</p>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="button primary">Sign Up</button>
        </form>
        <p className="switch-text">
          Already have an account?{' '}
          <button className="button secondary" onClick={onClickLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
