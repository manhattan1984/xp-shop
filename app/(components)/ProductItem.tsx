"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion as m } from "framer-motion";

const ProductItem = ({
  name,
  product_image,
  id,
  key,
  product_item,
}: {
  name: string;
  product_image: string;
  id: number;
  key: number;
  product_item: {
    price: number;
  }[];
}) => {
  const prices = product_item.map(({ price }) => price).sort();
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  console.log("prices", maxPrice, minPrice);
  return (
    <Link
      className="text-center w-full basis-1/3 md:basis-1/4 flex-1"
      href={`/products/${id}`}
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 1 * +key } }}
      >
        <Image
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full object-center"
          src={product_image}
          priority={true}
        />

        <p className="font-light tracking-widest text-sm font-gajraj text-red-500">
          {name}
        </p>
        <p className="text-gray-700">
        ₦{minPrice} - {maxPrice}
        </p>
      </m.div>
    </Link>
  );
};

export default ProductItem;
