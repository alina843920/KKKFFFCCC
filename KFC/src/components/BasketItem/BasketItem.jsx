const BasketItem = (props) => {
  const { orderedProduct, onProductRemove } = props;
  const { name, price } = orderedProduct;
  const handleButtonClick = () => {
    onProductRemove(orderedProduct);
  };
  return (
    <li className="basket-item">
      <div className="info">
        <span>1x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          Remowe
        </button>
      </div>
    </li>
  );
};
export default BasketItem;
