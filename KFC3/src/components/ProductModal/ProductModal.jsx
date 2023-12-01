import React, { useState } from "react";
import "./ProductModal.scss";
import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      onUpdateBasketQuantity(product, quantity - 1);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
          <img src={product.imageUrl} alt={product.name} />
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
          <Carousel responsive={responsive} containerClass="carousel-container">
            <div>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <div>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <div>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
