import React, { Component } from 'react';
import './sideNavigation.css'



class SideNavigation extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    
    return (
      <nav className={`side-navigation ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={onClose}>X</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/products">Products</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default SideNavigation;
