import React, { Component } from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductList from '../components/ProductList';
import { featuresData } from '../data';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <section className="features">
          <h2>Почему выбирают нас?</h2>
          <div className="features-container">
            {featuresData.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Довольных клиентов</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Доставленных букетов</p>
            </div>
            <div className="stat-item">
              <h3>5</h3>
              <p>Лет опыта</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Служба поддержки</p>
            </div>
          </div>
        </section>
        <ProductList />
      </div>
    );
  }
}

export default HomePage;