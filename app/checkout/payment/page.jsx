"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { v4 as uuidv4 } from "uuid";

const page = () => {
  const router = useRouter();
  const config = {
    public_key: "FLWPUBK_TEST-85b6075160887da1a382cec073db16fa-X",
    tx_ref: uuidv4(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

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
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
        className="bg-black text-white p-4 w-full mt-2"
      >
        Pay Now
      </button>
      <button
        onClick={() => router.push("/checkout/shipping")}
        className="p-4 w-full"
      >
        {"< Return to shipping"}
      </button>
    </>
  );
};

export default page;
