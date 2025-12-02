import React, { useState } from 'react';
import { productsData } from '../data';
import ProductModal from '../components/ProductModal';

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: `Новый букет ${products.length + 1}`,
      price: `${Math.floor(Math.random() * 2000) + 1000} ₽`,
      description: "Новый прекрасный букет"
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id, e) => {
    e.stopPropagation();
    setProducts(products.filter(p => p.id !== id));
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
  };

  const toggleSelect = (id, e) => {
    e.stopPropagation();
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const openModal = (product, e) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const deleteSelected = () => {
    setProducts(products.filter(p => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };

  return (
    <div className="products-page">
      <h1>Каталог цветов</h1>
      
      <div className="page-controls">
        <button onClick={addProduct}>Добавить букет</button>
        {selectedIds.length > 0 && (
          <button onClick={deleteSelected} className="delete-selected">
            Удалить выбранные ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="products-container">
        {products.map(product => (
          <div 
            key={product.id} 
            className={`product-card ${selectedIds.includes(product.id) ? 'selected' : ''}`}
            onClick={(e) => toggleSelect(product.id, e)}
          >
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p>{product.description}</p>
            <div className="card-buttons">
              <button 
                className="details-btn"
                onClick={(e) => openModal(product, e)}
              >
                Подробнее
              </button>
              <button 
                className="delete-btn"
                onClick={(e) => deleteProduct(product.id, e)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsPage;