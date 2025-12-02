import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data';

class ProductList extends Component {
  render() {
    return (
      <section className="product-list">
        <h2>Популярные букеты</h2>
        <div className="products-container">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList;