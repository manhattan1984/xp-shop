import { clothes } from "@/app/(data)/cartitems";
import React from "react";
import ProductDetail from "./ProductDetail";

const page = ({ params: { id } }) => {
  const item = clothes.find((item) => item.id === +id);
  return <ProductDetail {...item} />;
};

export default page;
