"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../(context)/CartContext";
import { clothes } from "../(data)/cartitems";

const CartRecommendation = ({ name, price, src, id }) => {
  const { addOneToCart } = useCart();

  return (
    <div className="flex justify-between w-full items-center p-4 border-b gap-4">
      <Image
        alt={name}
        src={src}
        height={90}
        width={90}
        // sizes={"50%"}
        // className="h-20 w-32"
      />
      <div className="w-full">
        <p className="mb-2 text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500">${price}</p>
      </div>
      <button
        className="text-gray-700"
        onClick={() => {
          addOneToCart(id);
        }}
      >
        Add
      </button>
    </div>
  );
};

const CartItem = ({ id, quantity }) => {
  const { addOneToCart, removeOneFromCart, deleteFromCart } = useCart();
  const { name, price, src } = clothes.find((item) => item.id === id);

  return (
    <div className="flex gap-2 justify-between p-8 border-b items-center">
      <Image height={60} width={60} src={src} alt={name} />
      <div className="w-full">
        <Link href={"/"} className="underline">
          {name}
        </Link>
        <div className="flex mt-2 text-center font-medium w-1/2">
          <button onClick={() => removeOneFromCart(id)} className="border w-full">
            -
          </button>
          <p className="border w-full">{quantity}</p>
          <button
            onClick={() => addOneToCart(id)}
            className="border w-full"
          >
            +
          </button>
        </div>
      </div>
      <div className="">
        <AiOutlineDelete
          onClick={() => deleteFromCart(id)}
          className="cursor-pointer text-gray-500"
        />
        <p className="text-xs text-gray-500 mt-4">${price}</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const { open, setOpen, cartProducts } = useCart();
  function handleOpen() {
    return () => {
      setOpen(!open);
    };
  }
  let recommendations = clothes.sort(() => 0.5 - Math.random()).slice(0, 3);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <div
      onClick={handleOpen}
      className={`ease-in-out duration-300 ${
        open ? "" : "translate-x-full"
      }  z-30 h-screen w-screen backdrop-brightness-50 flex fixed items-center justify-end`}
    >
      <div className="h-[98%] w-4/5 bg-white rounded-md m-2 p-2  text-black">
        <div className="flex items-center uppercase border-b p-2 border-gray-300">
          <p className="flex-1 text-center text-sm">Your Cart</p>
          <AiOutlineClose
            className="cursor-pointer text-black text-lg"
            onClick={handleOpen()}
          />
        </div>

        <div className="h-4/5 overflow-y-auto">
          {cartProducts.length === 0 ? (
            <div className="text-center p-8 border-b">
              <p className="uppercase font-light tracking-wider text-gray-500">
                Your cart is empty
              </p>
              <p className="text-xs text-gray-500 mt-2 mb-4">
                Add your favorite items to your cart.
              </p>
              <button className="w-full bg-black text-white p-2">
                Shop Now
              </button>
            </div>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem {...item} key={index} />
            ))
          )}

          <div className="bg-gray-50 mt-8 h-fit w-full">
            <p className="text-center uppercase font-light pt-8">
              you may also like
            </p>
            <div className="w-11/12 mx-auto">
              {recommendations.map((item, index) => (
                <CartRecommendation key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="flex justify-between font-medium">
            <p>Subtotal ({0} item(s))</p>
            <p>${0}</p>
          </div>
          <button className="w-full bg-black text-white p-2">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
