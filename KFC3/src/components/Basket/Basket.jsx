import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";
import { groupBy } from "../utils";
import { ImCross } from "react-icons/im";

const Basket = (props) => {
  const { orderedProducts, onProductRemove } = props;

  const orderCount = orderedProducts.length;

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );

  const groupedOrderProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.name)
  );

  const handleProductRemove = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderCount} products)</span>
        </h5>
        <button className="close-button">
          <ImCross />
        </button>
      </header>
      <div>
        <ul>
          {groupedOrderProducts.map(([name, orderedProducts]) => (
            <BasketItem
              orderCount={orderedProducts.length}
              orderedProduct={orderedProducts[0]}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;
