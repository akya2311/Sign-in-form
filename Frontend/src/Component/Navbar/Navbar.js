import { React, useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return(
  
  <nav className="navbar">
    <div className="logo">MyWebsite</div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/">Features</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
    <button className="logout-btn" onClick={logout}>Logout</button> {/* Logout button positioned outside the nav-links */}
  </nav>
  )
};

export default Navbar;