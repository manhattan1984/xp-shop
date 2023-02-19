"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../(context)/CartContext";
import Link from "next/link";
import { useMenu } from "../(context)/MenuContext";

const Header = () => {
  const { setOpen } = useCart();
  const { menuOpen, setMenuOpen } = useMenu();
  return (
    <nav className="top-0 z-20 flex justify-between p-2 fixed w-full shadow backdrop-blur-sm bg-black">
      <FiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <Link href="/" className={"text-2xl uppercase font-gajraj"}>
        Xperience
      </Link>
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
