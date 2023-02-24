"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../../(context)/CartContext";

const page = () => {
  const router = useRouter();
  const { getTotalCost } = useCart();
  const email = "mikkimanhattan@gmail.com";
  const phone_number = "08125365368";
  const name = "Michael Jackson";

  const total = getTotalCost();
  const config = {
    public_key: "FLWPUBK_TEST-85b6075160887da1a382cec073db16fa-X",
    tx_ref: uuidv4(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phone_number,
      name,
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
          <p>{email}</p>
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
          <p>DHL eCommerce Priority - Duties and Taxes included · ${total}</p>
        </div>
      </div>

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
