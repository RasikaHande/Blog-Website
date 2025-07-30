import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MyBlog</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLoggedIn && (
            <>
              <li><Link to="/create">Create Post</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </>
          )}
          {!isLoggedIn ? (
            <li><Link to="/login">Log In</Link></li>
          ) : (
            <li><button onClick={handleLogout} className="logout-btn">Log Out</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
