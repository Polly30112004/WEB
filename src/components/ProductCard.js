import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { name, price, description } = this.props.product;
    return (
      <div className="product-card">
        <h3>{name}</h3>
        <p className="product-price">{price}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default ProductCard;