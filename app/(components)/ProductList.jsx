import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="py-4 bg-white my-10 flex gap-6 flex-wrap justify-center w-full">
      {products.map((item, index) => (
        <ProductItem {...item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
