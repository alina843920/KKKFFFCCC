import React, { useState } from "react";
import "./ProductModal.scss";
const ProductModal = (props) => {
  const { onClose, product, onAddToBasket } = props;
  const [quantity, setQuantity] = useState(1);

  const AddToBasket = () => {
    onAddToBasket(product, quantity);
    onClose();
  };

  const IncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const DecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-modal">
      <button className="close-button" onClick={onClose}>
        &#10006;
      </button>
      {product && (
        <div>
          <img src={product.imageUrl}></img>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div>
            <button onClick={DecrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={IncrementQuantity}>+</button>
          </div>
          <button onClick={AddToBasket}>Add</button>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
