"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="border p-4">
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Contact</p>
            <button className="text-gray-700">Change</button>
          </div>
          <p>mikkimanhattan@gmail.com</p>
        </div>
        <div className="h-[1px] bg-gray-200 my-4"></div>
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Ship to</p>
            <button className="text-gray-700">Change</button>
          </div>
          <p>55 Graffton Road, London, NW3 5EL, United Kingdom</p>
        </div>
        <div className="h-[1px] bg-gray-200 my-4"></div>
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Method</p>
          </div>
          <p>DHL eCommerce Priority - Duties and Taxes included · $23.99</p>
        </div>
      </div>
      <p className="mt-4 mb-1">Payment</p>
      <p>All transactions are secure and encrypted.</p>
      <div className="border ">
        <p className="p-2">Credit card</p>
        <div className="bg-gray-100 p-2 w-full flex flex-col gap-2">
          <input
            placeholder="Card number"
            type="text"
            className="w-full p-2 border"
          />
          <input
            placeholder="Name on card"
            type="text"
            className="w-full p-2 border"
          />
          <input
            placeholder="Expiration date (MM/YY)"
            type="text"
            className="w-full p-2 border"
          />
          <input
            placeholder="Security Code"
            type="text"
            className="w-full p-2 border"
          />
        </div>
      </div>
      <p className="mt-4 mb-1">Billing Address</p>
      <p>Select the address that matches your card or payment method.</p>
      <fieldset className="border rounded">
        <div className="flex p-4 items-center">
          <input type="radio" value="shipping" name="" id="shipping" />
          <p className="ml-2">Same as shipping address</p>
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <div className="flex p-4 items-center">
          <input type="radio" value="different" name="" id="different" />
          <p className="ml-2">Use different address</p>
        </div>
      </fieldset>
      <button
        onClick={() => router.push("/checkout/complete")}
        className="bg-black text-white p-4 w-full mt-2"
      >
        Pay Now
      </button>
      <button onClick={() => router.push("/checkout/shipping")} className="p-4 w-full">
        {"< Return to shipping"}
      </button>
    </>
  );
};

export default page;
