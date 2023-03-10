"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

import { useCart, useLocalStorage } from "../../(context)/CartContext";
import { toast, Toaster } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import supabase from "@/utils/supabase";

const Payment = ({ paymentTypes }) => {
  const router = useRouter();
  const { getTotalCost, shippingCost } = useCart();

  const [userInfo] = useLocalStorage("userInfo", null);
  const [shippingMethod] = useLocalStorage("shippingMethod", null);

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

  const [paymentType, setPaymentType] = useState();

  const total = getTotalCost() + shippingCost;
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_8ab96aede07a683eeaf39e8a68aa3b6e7aec0f72",
  };

  const insertOrderToDatabase = async () => {
    // Insert User Payment

    const { data: userPaymentData, error: userPaymentError } = await supabase
      .from("user_payment_method")
      .insert([
        { user_email: email, is_default: false, payment_type_id: paymentType },
      ])
      .select();

    const userPaymentId = userPaymentData[0].id;

    console.log(
      `Insert User Payment \n data: ${userPaymentData}, error: ${userPaymentError}`
    );

    // Insert Shipping Address

    const { data: shippingAddressData, error: shippingAddressError } =
      await supabase
        .from("address")
        .insert([
          {
            city,
            state,
            country,
            // update flat_number somewhere
            flat_number: 1,
            address,
            zipcode,
            apartment,
          },
        ])
        .select();

    const shippingAddressId = shippingAddressData[0].id;

    console.log(
      `Insert Shipping Address \n data: ${shippingAddressData}, error: ${shippingAddressError}`
    );

    // Insert Shop Order
    const { data: shopOrderData, error: shopOrderError } = await supabase
      .from("shop_order")
      .insert([
        {
          user_email: email,
          shipping_address: shippingAddressId,
          shipping_method: shippingMethod,
          order_total: total,
          order_status: 1,
          payment_method_id: userPaymentId,
        },
      ])
      .select();

    const shopOrderDataId = shopOrderData[0].id;

    console.log(
      `Insert Shop Order \n data: ${shopOrderData}, error: ${shopOrderError}`
    );

    const getProductPrice = async (id) => {
      let {
        data: { price },
        error,
      } = await supabase
        .from("product_item")
        .select("price")
        .eq("id", id)
        .single();

      console.log(`Get Product Price \n data: ${price}, error: ${error}`);

      if (price) {
        return price;
      }

      throw Error(error);
    };

    const promisedOrderLines = cartProducts.map(
      async ({ id, quantity: qty }) => ({
        product_item_id: id,
        qty,
        price: await getProductPrice(id),
        order_id: shopOrderDataId,
      })
    );

    const orderLines = await Promise.all(promisedOrderLines);

    const { data: orderLineData, error: orderLineError } = await supabase
      .from("order_line")
      .insert(
        // Insert Order Line
        orderLines
      );

    console.log(
      `Insert Order Line \n data: ${orderLineData}, error: ${orderLineError}`
    );

    setCartProducts([]);
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    insertOrderToDatabase();


  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

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

      {paymentTypes.map(({ id, value }) => (
        <div key={id} className="border p-4 mt-4">
          <div className="flex gap-2">
            <input
              onChange={(e) => {
                setPaymentType(+e.target.value);
              }}
              type="radio"
              name="paymentType"
              value={id}
              id={id}
            />
            <div className="">{value}</div>
          </div>
        </div>
      ))}

      <button
        onClick={async () => {
          if (paymentType === 1) {
            initializePayment(onSuccess, onClose);
            toast("Online Payment");
            // insertOrderToDatabase();
            return;
          } else {
            insertOrderToDatabase();
          }
          router.push("/checkout/success");

          toast("Other Payment Option");
        }}
        className="bg-black text-white p-4 w-full mt-2"
        disabled={!paymentType}
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

export default Payment;
