"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { v4 as uuidv4 } from "uuid";
import { useCart, useLocalStorage } from "../../(context)/CartContext";
import { toast, Toaster } from "react-hot-toast";
import supabase from "@/utils/supabase";

const page = () => {
  const router = useRouter();
  const { getTotalCost } = useCart();

  const [userInfo] = useLocalStorage("userInfo", null);

  if (!userInfo || !Object.values(userInfo).every((value) => value)) {
    redirect("/checkout");
  }

  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts", []);

  const {
    email,
    address,
    state,
    city,
    country,
    zipcode,
    apartment,
    firstName,
    lastName,
    phone,
  } = userInfo;

  const name = `${firstName} ${lastName}`;
  const fullAddress = `${apartment}, ${address}, ${city}, ${zipcode}, ${state}, ${country}`;

  const total = getTotalCost();
  const config = {
    public_key: "FLWPUBK_TEST-85b6075160887da1a382cec073db16fa-X",
    tx_ref: uuidv4(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phone,
      name,
    },
    customizations: {
      title: "Payment For Products",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    // redirect_url: "http://localhost:3000/checkout/status/",
  };

  const handleFlutterPayment = useFlutterwave(config);

  async function addOrderToDatabase(email, total, fullAddress, cartProducts) {
    return await supabase.from("orders").insert([
      {
        user_email: email,
        total,
        address: fullAddress,
        products: cartProducts,
      },
    ]);
  }

  return (
    <>
      <Toaster />
      <div className="border p-4">
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Contact</p>
            <button
              className="text-gray-700"
              onClick={() => router.push("/checkout")}
            >
              Change
            </button>
          </div>
          <p>{email}</p>
        </div>
        <div className="h-[1px] bg-gray-200 my-4"></div>
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Ship to</p>
            <button
              className="text-gray-700"
              onClick={() => router.push("/checkout")}
            >
              Change
            </button>
          </div>
          <p>{fullAddress}</p>
        </div>
        <div className="h-[1px] bg-gray-200 my-4"></div>
        <div className="">
          <div className="flex justify-between">
            <p className="text-gray-500">Method</p>
          </div>
          <p>Courier - Duties and Taxes included · ${total}</p>
        </div>
      </div>

      <button
        onClick={async () => {
          handleFlutterPayment({
            callback: async () => {
              const { data, error } = await addOrderToDatabase(
                email,
                total,
                fullAddress,
                cartProducts
              );

              if (!error) {
                setCartProducts([]);
                toast.success("Payment Completed");
                closePaymentModal();
                return;
              }

              toast.error(`${error}`);
              closePaymentModal();
              return;
            },
            onClose: () => {
              console.log("close");
            },
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
