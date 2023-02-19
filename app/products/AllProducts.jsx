import React from "react";
import ProductList from "../(components)/ProductList";
import { clothes } from "../(data)/cartitems";

const AllProducts = () => {
  return <ProductList products={clothes} />;
};

export default AllProducts;
