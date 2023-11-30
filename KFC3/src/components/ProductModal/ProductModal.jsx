import React, { useState } from "react";
import "./ProductModal.scss";
import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const ProductModal = (props) => {
  const { onClose, product, onAddToBasket, onUpdateBasketQuantity } = props;
  const [quantity, setQuantity] = useState(1);

  const AddToBasket = () => {
    onAddToBasket(product, quantity);
    onClose();
  };

  const IncrementQuantity = () => {
    setQuantity(quantity + 1);
    onUpdateBasketQuantity(product, quantity + 1);
  };

  const DecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onUpdateBasketQuantity(product, quantity + 1);
    }
  };

  return (
    <div className="product-modal">
      <button className="close-button" onClick={onClose}>
        <ImCross />
      </button>
      <button className="heart-button">
        <FaHeart />
      </button>
      {product && (
        <div>
          <img src={product.imageUrl}></img>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div>
            <button className="decrement-button" onClick={DecrementQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button className="increment-button" onClick={IncrementQuantity}>
              +
            </button>
          </div>
          <button className="add-button" onClick={AddToBasket}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
