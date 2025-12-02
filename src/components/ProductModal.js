import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{product.name}</h2>
        <p className="modal-price">{product.price}</p>
        <p>{product.description}</p>
        <div className="modal-details">
          <p><strong>ID товара:</strong> {product.id}</p>
          <p><strong>Категория:</strong> Цветы</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;