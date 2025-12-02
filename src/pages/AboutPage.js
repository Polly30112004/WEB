import React from 'react';
import { companyData } from '../data';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>О нашей компании</h2>
      <p>
        {companyData.name} - это цветочный магазин с любовью к своему делу.
        Мы работаем с 2015 года и дарим радость нашим клиентам.
      </p>
      <h3>Наша миссия</h3>
      <p>Дарить людям радость через прекрасные цветы.</p>
    </div>
  );
};

export default AboutPage;