import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ name, image_url, price, id }) => {
  return (
    <Link
      className="text-center w-full basis-1/3 md:basis-1/4"
      href={`/products/${id}`}
    >
      <div>
        <div className="relative h-48 w-full">
          <Image alt={name} fill={true} src={image_url} />
        </div>
        <p className="font-light tracking-widest text-sm font-gajraj text-red-500">
          {name}
        </p>
        <p className="text-sm text-gray-500">₦{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
