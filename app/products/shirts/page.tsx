import ProductList from "@/app/(components)/ProductList";
import supabase from "@/utils/supabase";
import React from "react";

const page = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "shirt");

  return <ProductList products={data} />;
};

export default page;
