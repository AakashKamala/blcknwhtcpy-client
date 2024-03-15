import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          blcknwht
        </Link>
        <div className="nav-toggle" onClick={toggleNav}>
          <span className="toggle-icon">{isNavOpen ? '×' : '☰'}</span>
        </div>
        <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;