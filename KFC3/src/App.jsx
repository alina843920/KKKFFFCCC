import React, { useState } from "react";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import ProductModal from "./components/ProductModal/ProductModal";

import "./App.css";

const App = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  const handleAddToBasket = (product, quantity) => {
    const newProduct = { ...product, quantity };
    setOrderedProducts([...orderedProducts, newProduct]);
  };

  const handleUpdateBasketQuantity = (product, newQuantity) => {
    const updatedProducts = orderedProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: newQuantity };
      }
      return p;
    });
    setOrderedProducts(updatedProducts);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <main>
        <header>
          <h1>Welcome</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
            />
          ))}
        </section>
      </main>
      {isModalOpen && (
        <ProductModal
          onClose={handleModalClose}
          product={selectedProduct}
          onAddToBasket={handleAddToBasket}
          onUpdateBasketQuantity={handleUpdateBasketQuantity}
        />
      )}
    </>
  );
};

export default App;
