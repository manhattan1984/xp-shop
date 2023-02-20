import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ name, src, price, id }) => {
  return (
    <Link className="text-center w-full basis-1/3 md:basis-1/4" href={`/products/${id}`}>
      <div >
        <Image
          alt={name}
          height={0}
          width={0}
          sizes="100%"
          className="w-full h-auto"
          src={src}
        />
        <p className="font-light tracking-widest text-sm text-gray-800 font-gajraj">
          {name}
        </p>
        <p className="text-sm text-gray-500">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
