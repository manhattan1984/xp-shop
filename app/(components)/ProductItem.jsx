import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ name, product_image, id }) => {
  return (
    <Link
      className="text-center w-full basis-1/3 md:basis-1/4"
      href={`/products/${id}`}
    >
      <div>
        <Image
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
          src={product_image}
          priority={true}
        />

        <p className="font-light tracking-widest text-sm font-gajraj text-red-500">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
