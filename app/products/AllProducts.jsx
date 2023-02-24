"use client";
import React from "react";
import ProductList from "../(components)/ProductList";
import { useCart } from "../(context)/CartContext";

const AllProducts = () => {
  const { serverProducts } = useCart();
  return <ProductList products={serverProducts} />;
};

export default AllProducts;
