import React, { Component } from 'react';
import { companyData } from '../data';
// Цветочные изображения
const flower1 = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&w=400';
const flower2 = 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&w=400';
const flower3 = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <h2>Наша история</h2>
        <p>
          {companyData.name} начал свой путь в 2015 году с маленькой теплицы и большой любви к цветам.
          Сегодня мы — это цветочный сад, где каждый может найти свой идеальный букет.
        </p>
        <h3>Наша миссия</h3>
        <p>Дарить людям радость и красоту, предлагая только самые свежие цветы и профессиональный сервис.</p>
        <div className="about-gallery">
          <div className="gallery-item"><img src={flower1} alt="Цветочная композиция 1"/></div>
          <div className="gallery-item"><img src={flower2} alt="Цветочная композиция 2"/></div>
          <div className="gallery-item"><img src={flower3} alt="Цветочная композиция 3"/></div>
        </div>
      </div>
    );
  }
}

export default AboutPage;