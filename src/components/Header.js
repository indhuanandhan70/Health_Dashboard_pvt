import React from 'react';
import '../styles/Header.css';
import { FaBell, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Healthcare.</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." readOnly />
      </div>
      <div className="header-actions">
        <FaPlus className="icon add-icon" />
        <FaBell className="icon bell-icon" />
        <div className="user-profile">
          <img src="https://via.placeholder.com/32" alt="User" className="avatar" />
          <span className="username">Dr. Indhu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;