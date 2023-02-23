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
      </div>

      <div className="">
        <p className="text-xl mt-8 mb-1">Shipping method</p>
        <p>
          The transit time estimates displayed below for USPS are for time
          in-transit with the carrier. This does not include the 48 hour
          processing time at our facility during regular business hours, nor
          does it account unforeseen issues with transit, such as severe
          weather, etc.
        </p>

        <div className="border p-4 mt-4">
          <div className="flex justify-between">
            <p>DHL eCommerce Priority - Duties and Taxes included</p>
            <p>$16.59</p>
          </div>
          <p className="text-sm text-gray-500">
            Total includes taxes and duties
          </p>
        </div>

        <button
          onClick={() => router.push("/checkout/payment")}
          className="w-full bg-black text-white p-4 rounded mt-4"
        >
          Continue To Payment
        </button>
        <button
          onClick={() => router.push("/checkout")}
          className="w-full text-current p-4"
        >
          {" "}
          {"<"} Return to information
        </button>
      </div>
    </>
  );
};

export default page;
