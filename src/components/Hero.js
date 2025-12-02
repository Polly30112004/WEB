import React from 'react';
import { companyData } from '../data';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Добро пожаловать в {companyData.name}</h2>
        <p>{companyData.slogan}</p>
        <button className="cta-button">Выбрать букет</button>
      </div>
    </section>
  );
};

export default Hero;