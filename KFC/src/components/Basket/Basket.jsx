import BasketItem from "../BasketItem/BasketItem";
import Product from "../Product/Product";
import { groupBy } from "../utils";
import "./Basket.scss";

const Bansket = (props) => {
  const { orderedProducts, onProductRemove } = props;
  const orderCount = orderedProducts.length;
  const totalCost = orderedProducts.reduce(
    (acc, orderedProducts) => acc + orderedProducts.price,
    0
  );

  const groupedOrderProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.id)
  );

  const handleProductRemove = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };
  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderCount})</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {orderedProducts.map(([name, orderedProducts]) => (
            <BasketItem
              orderCount={orderedProducts.length}
              orderedProduct={orderedProducts[0]}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};
export default Bansket;
