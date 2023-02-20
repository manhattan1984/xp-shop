import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="h-full mt-8 bg-white text-black py-8 flex items-center">
      <div className="w-4/5 mx-auto max-w-md">
        <p className="mb-2 text-2xl">Contact Information</p>
        <input
          placeholder="Email"
          className="w-full border p-2"
          type="email"
          name=""
          id=""
        />

        <p className="mb-2 mt-4">Shipping address</p>
        <input
          placeholder="Country"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="First name"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Last name"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Company (optional)"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Address"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Apartment"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="City"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="State"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Zip Code"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />
        <input
          placeholder="Phone"
          type="text"
          name=""
          id=""
          className="w-full border p-2 mt-2"
        />

        <button className="w-full p-2 bg-black text-white mt-4">
          Continue to shipping
        </button>

        <button
          onClick={() => router.push("/products")}
          className="w-full p-2 text-sm text-gray-600 mt-2"
        >
          {"<"} Return to shopping
        </button>
      </div>
    </div>
  );
};

export default Checkout;
