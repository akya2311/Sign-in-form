import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Component/Home/HomePage';
import SignInPage from './SingUp/SignInPage';
import { AuthProvider } from './Context/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
