import React, { Component } from 'react';
import { companyData } from '../data';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h2>Добро пожаловать в {companyData.name}</h2>
          <p>{companyData.slogan}</p>
          <button className="cta-button">Выбрать букет</button>
        </div>
      </section>
    );
  }
}

export default Hero;