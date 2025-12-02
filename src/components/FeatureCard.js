import React, { Component } from 'react';

class FeatureCard extends Component {
  render() {
    const { title, description, icon } = this.props; // деструктиризация
    return (
      <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default FeatureCard;