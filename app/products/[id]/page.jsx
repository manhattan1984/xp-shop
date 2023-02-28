import supabase from "@/utils/supabase";
import React from "react";
import ProductDetail from "./ProductDetail";

const page = async ({ params: { id } }) => {
  let { data: product, error } = await supabase
    .from("product")
    .select("*, product_item (*)")
    .eq("id", id)
    .single();

  const variation_options = product.product_item.map(
    ({ variation_option_id }) => variation_option_id
  );

  console.log(product);
  console.log(variation_options);

  const { data: variation_option } = await supabase
    .from("variation_option")
    .select()
    .in("id", variation_options);

  console.log("x", variation_option);

  return (
    <ProductDetail
      product={product}
      variation_options={variation_option}
      relatedProducts={product}
    />
  );
};

export default page;
