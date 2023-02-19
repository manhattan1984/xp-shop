"use client";
import Link from "next/link";
import React from "react";
import { useMenu } from "../(context)/MenuContext";

const Menu = ({ links }) => {
  const { menuOpen } = useMenu();
  return (
    <div
      className={`ease-in-out duration-300 ${
        menuOpen ? "" : "-translate-y-full"
      } h-fit w-screen z-10 fixed inset-0 bg-white text-gray-500 flex flex-col gap-4 uppercase text-xs p-4 mt-[40px]`}
    >
      {links.map(({ link, name }) => (
        <Link key={name} href={link} className="border-b pb-[10px]">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
