import React from 'react';
import './Header.css'; // Import CSS file for the header styles

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">{props.name}</div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/products">Products</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <div className="user-actions">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
