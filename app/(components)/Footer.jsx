"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const Footer = ({ links }) => {
  const emailRef = useRef();
  const addToNewsLetter = async () => {
    const email = emailRef.current.value;

    if (email) {
      try {
        const res = await fetch("/api/addtonewsletter", {
          method: "POST",
          body: JSON.stringify({ email }),
        });
        console.log("res", res);
        const { status } = res;
        if (status == 200) {
          toast.success(`You've been added to our newsletter`);
          emailRef.current.value = null;
        }
      } catch (error) {
        console.log(error);
        toast.error("Error");
      }
      return
    }
    toast('Please Enter Your Email')
  };
  return (
    <>
      <Toaster />
      <div className="mt-2 uppercase text-xs py-2 lg:h-fit bg-red-600 text-white w-full p-2">
        <div className="lg:flex gap-[32px]">
          <div className="flex-1">
            <p className="pt-8 border-b border-white pb-4 text-xs font-bold">
              Main Menu
            </p>

            <div className=" mt-4">
              <ul className="flex flex-col gap-2">
                {links.map(({ link, name }) => (
                  <Link
                    className="uppercase hover:text-gray-300"
                    href={link}
                    key={name}
                  >
                    {name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="flex-1">
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
        </div> */}
          <div className="flex-1">
            <p className="pt-8 border-b border-white pb-4 text-xs font-bold">
              Newsletter
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <p className="mb-1">
                Join to get special offers, free giveaway, and
                once-in-a-lifetime deals.
              </p>
              <div className="">
                <input
                  ref={emailRef}
                  placeholder="your-email@example.com"
                  className="w-full p-4 text-red-600"
                />
                <button
                  onClick={addToNewsLetter}
                  className="p-3 w-full border my-2 border-white text-xl uppercase"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-8 pb-6 w-full text-center flex justify-center gap-2 items-center uppercase text-xs">
          <p>@𝕱𝖑𝖔𝖆𝖙𝖎𝖓𝖌 𝖂𝖎𝖙𝖍 𝕱𝖑𝖆𝖈𝖐𝖔 2023</p>
          <p>powered by jacksonwebdev</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
