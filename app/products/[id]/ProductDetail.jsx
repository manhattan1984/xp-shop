"use client";
import ProductList from "@/app/(components)/ProductList";
import { useCart } from "@/app/(context)/CartContext";
import { clothes } from "@/app/(data)/cartitems";
import Image from "next/image";
import React from "react";

const ProductDetail = ({ id, name, src, price }) => {
  const details = ["Hello World", "Hasta La Vista", "I'll be back"];
  let related = clothes.sort(() => 0.5 - Math.random()).slice(0, 4);
  const { addOneToCart, removeOneFromCart, setOpen } = useCart();

  return (
    <div className="bg-white text-black text-center py-4">
      <div className="md:flex py-4 items-center">
        <Image
          src={src}
          height={0}
          width={0}
          sizes="100%"
          className="h-auto w-full md:w-2/3 "
        />
        <div className="">
          <p className="font-light text-gray-600">${price}</p>
          <p className="my-4 font-light text-gray-500 text-3xl font-gajraj">
            {name}
          </p>

          <p className="text-xs uppercase">size</p>
          <select
            name=""
            id=""
            className="w-4/5 mx-auto bg-white border-b border-black p-2 font-light"
          >
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
          {/* 
      <div className="border border-black flex text-center w-1/4 mx-auto my-4">
      <button className="w-full">-</button>
      <p className="w-full">{1}</p>
      <button className="w-full">+</button>
    </div> */}

          <button
            onClick={() => {
              addOneToCart(id);
              setOpen(true);
            }}
            className="text-xs border border-black p-2 w-4/5 mt-8"
          >
            Add To Cart • ${price}
          </button>

          <ul className="list-disc w-4/5 mx-auto my-8">
            {details.map((detail) => (
              <li className="text-xs text-gray-500" key={detail}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <p className="text-gray-500 uppercase text-sm font-gajraj">
          related products
        </p>

        <ProductList products={related} />
      </div>
    </div>
  );
};

export default ProductDetail;
