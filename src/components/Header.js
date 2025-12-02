import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">{companyData.name}</h1>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/products">Каталог</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;