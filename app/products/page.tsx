import supabase from "@/utils/supabase";
import React from "react";
import ProductList from "../(components)/ProductList";


const page = async () => {
  let { data, error } = await supabase.from("product").select("*");
  return <ProductList title="All Products" products={data} />;
};

export default page;
