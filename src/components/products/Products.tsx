import React from "react";
import { Link } from "react-router-dom";
import * as Layout from "../../view/layout";

const Products = () => {
  const products = ["product1", "product2", "product3"];
  return (
    <div>
      <Layout.NavBar />
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
