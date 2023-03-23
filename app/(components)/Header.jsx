"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../(context)/CartContext";
import Link from "next/link";
import { useMenu } from "../(context)/MenuContext";
import Image from "next/image";

const Header = ({ links }) => {
  const { setOpen } = useCart();
  const { menuOpen, setMenuOpen } = useMenu();
  return (
    <nav className="top-0 z-20 flex justify-between p-2 fixed w-full backdrop-blur-sm bg-red-600 text-white">
      <FiMenu
        className="text-2xl cursor-pointer lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <Link href="/" className={"text-md uppercase font-gajraj"}>
        <div className="flex items-center gap-4">
          
          <p className="">𝕱𝖑𝖔𝖆𝖙𝖎𝖓𝖌 𝖂𝖎𝖙𝖍 𝕱𝖑𝖆𝖈𝖐𝖔</p>
        </div>
      </Link>
      <AiOutlineShoppingCart
        onClick={() => {
          setOpen(true);
        }}
        className="text-2xl cursor-pointer lg:hidden"
      />
      <div className="lg:flex items-center hidden">
        <ul>
          {links.map(({ link, name }) => (
            <Link key={name} className="uppercase mx-4 hover:text-gray-300" href={link}>
              {name}
            </Link>
          ))}
        </ul>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          CART
        </button>
      </div>
    </nav>
  );
};

export default Header;
