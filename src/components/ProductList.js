import React from 'react';
import { productsData } from '../data';

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Популярные букеты</h2>
      <div className="products-container">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;