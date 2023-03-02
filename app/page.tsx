import supabase from "@/utils/supabase";
import React from "react";
import HomePage from "./HomePage";

const page = async () => {
  // let { data: product, error } = await supabase.from("product").select("*") .neq("category_id", 2);

  let { data: product, error } = await supabase
    .from("product")
    .select(
      `name, product_image, id`)
    .neq("category_id", 2);



  return <HomePage product={product} />;
};

export default page;
