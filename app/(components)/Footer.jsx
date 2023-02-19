import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-11/12 mx-auto mt-2 uppercase text-xs py-2">
      <div className="">
        <p className="pt-8 border-b border-white pb-4 text-xs font-bold">
          Main Menu
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <Link href="">Home</Link>
          <Link href="">Shop All</Link>
          <Link href="">Apparel</Link>
          <Link href="">Plushies</Link>
          <Link href="">Accessories</Link>
          <Link href="">Footwear</Link>
          <Link href="">Mystery Items</Link>
        </div>
      </div>
      <div className="">
        <p className="pt-8 border-b border-white pb-4 text-xs font-bold">
          More Info
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <Link href="">Sizing Chart</Link>
          <Link href="">FAQ</Link>
          <Link href="">Return & Exchange</Link>
          <Link href="">Contact</Link>
          <Link href="">Search</Link>
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms Of Service</Link>
        </div>
      </div>
      <div className="">
        <p className="pt-8 border-b border-white pb-4 text-xs font-bold">
          Newsletter
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <p>
            Join to get special offers, free giveaway, and once-in-a-lifetime
            deals.
          </p>
          <div className="">
            <input
              placeholder="your-email@example.com"
              className="w-full p-4"
            />
            <button className="p-3 w-full border my-2 border-white text-xl uppercase">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-center flex justify-center gap-2 items-center uppercase text-xs">
        <p>@ xperience 2023</p>
        <p>powered by jacksonwebdev</p>
      </div>
    </div>
  );
};

export default Footer;
