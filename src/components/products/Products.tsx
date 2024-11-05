import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = ["product1", "product2", "product3"];
  return (
    <div>
      <div>Products Page</div>
      {products.map((product) => {
        return (
          <Link to={`/products/${product}`}>
            <p>{product}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
