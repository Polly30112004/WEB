import React, { Component } from 'react';
import { companyData } from '../data';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="logo">{companyData.name}</h1>
          <nav className="nav">
            <a href="/">Главная</a>
            <a href="/about">О нас</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;