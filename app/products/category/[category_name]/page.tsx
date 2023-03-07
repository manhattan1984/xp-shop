import ProductList from "@/app/(components)/ProductList";
import supabase from "@/utils/supabase";
import React from "react";

const page = async ({
  params: { category_name },
}: {
  params: { category_name: string };
}) => {
  const { data, error } = await supabase
    .from("product")
    .select("*, product_category!inner(*)")
    .eq("product_category.category_name", category_name);

  return <ProductList title={category_name + "s"} products={data} />;
};

export default page;
