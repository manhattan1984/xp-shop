import supabase from "@/utils/supabase";
import React from "react";
import ProductDetail from "./ProductDetail";

const page = async ({ params: { id } }) => {
  let { data: product, error } = await supabase
    .from("product")
    .select("*, product_item (*), product_other_images!inner(product_image)")
    .eq("id", id)
    .single();

  if (product) {
    const variation_options = product.product_item.map(
      ({ variation_option_id }) => variation_option_id
    );

    const { data: variation_option } = await supabase
      .from("variation_option")
      .select()
      .in("id", variation_options);

    return (
      <ProductDetail
        product={product}
        variation_options={variation_option}
        relatedProducts={product}
      />
    );
  }

  return <p>Loading... </p>;
};

export default page;
