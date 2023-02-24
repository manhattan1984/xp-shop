import supabase from "@/utils/supabase";
import React from "react";
import ProductDetail from "./ProductDetail";

const page = async ({ params: { id } }) => {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  // let { data: products, error } = await supabase.from("products").select("*");

  return <ProductDetail {...products} relatedProducts={products} />;
};

export default page;
