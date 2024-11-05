import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams<{ productId: string }>();
  console.log("params", params);

  return <div>Product {params.productId}</div>;
};

export default ProductDetail;
