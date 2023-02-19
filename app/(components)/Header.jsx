"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../(context)/CartContext";

const Header = () => {
  const { setOpen } = useCart();
  return (
    <nav className="z-20 flex justify-between p-2 fixed w-full shadow backdrop-blur-sm">
      <FiMenu className="text-2xl" />
      <p className={"text-2xl uppercase font-gajraj"}>Xperience</p>
      <AiOutlineShoppingCart
        onClick={() => {
          setOpen(true);
        }}
        className="text-2xl cursor-pointer"
      />
    </nav>
  );
};

export default Header;
