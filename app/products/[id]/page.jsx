import supabase from "@/utils/supabase";
import React from "react";
import ProductDetail from "./ProductDetail";

const page = async ({ params: { id } }) => {
  let { data: product, error } = await supabase
    .from("product")
    .select("*, product_item!inner(*, variation_option!inner(value, id)), product_other_images!inner(product_image)")
    .eq("id", +id)
    .single();



  if (product) {
    return <ProductDetail product={product} />;
  }

  return <p>Loading... </p>;
};

export default page;
