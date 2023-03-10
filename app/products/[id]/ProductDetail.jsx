"use client";
import ProductList from "@/app/(components)/ProductList";
import PageWrapper from "@/app/(components)/PageWrapper";
import { useCart } from "@/app/(context)/CartContext";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ProductDetail = ({ product, variation_options }) => {
  const {
    name,
    product_image,
    product_item,
    description,
    product_other_images,
  } = product;

  const { serverProducts } = useCart();
  let related = serverProducts?.slice(0, 4);
  const { addOneToCart, removeOneFromCart, setOpen } = useCart();

  const [price, setPrice] = useState();
  const [productItemId, setProductItemId] = useState();
  // const [first, setfirst] = useState(second)

  const variantRef = useRef();

  const handleVariantChange = (e) => {
    const variant = +e.target.value;

    const { price, id } = product_item.find(
      ({ variation_option_id }) => variation_option_id === variant
    );

    setPrice(price);
    setProductItemId(id);
  };

  const productImages = product_other_images.map(
    ({ product_image }) => product_image
  );

  console.log(productImages);
  return (
    <PageWrapper>
      <Toaster />
      <div className="bg-white text-black text-center py-4">
        <div className="md:flex py-4 items-center">
          <Image
            src={product_image}
            height={0}
            width={0}
            sizes="100%"
            className="h-auto w-full md:w-2/3 "
          />

          <div className="flex gap-2 justify-center mb-4">
            {productImages.map((image) => (
              <Image
                src={image}
                alt={name}
                key={image}
                height={60}
                width={60}
                className="border border-black"
              />
            ))}
          </div>
          <div className="">
            <p className="text-xs">Please Select A Size To Get The Price</p>
            <p className="font-light text-gray-600">₦{price}</p>
            <p className="my-4 font-light text-red-500 text-3xl font-gajraj">
              {name}
            </p>

            <div className="flex flex-col items-center justify-center">
              <p className="text-md uppercase">size</p>

              <div className="flex gap-4 py-4 font-gajraj">
                {variation_options.map(({ id, value }) => (
                  <div
                    key={id}
                    className="flex gap-1 items-center justify-center"
                  >
                    <p className="uppercase p-[4px]">{value}</p>
                    <input
                      type="radio"
                      name="size"
                      className="m-2"
                      value={id}
                      onChange={handleVariantChange}
                      key={id}
                      ref={variantRef}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (productItemId) {
                  addOneToCart(productItemId);
                  setOpen(true);
                  return;
                }
                toast("Select a size");
              }}
              className="text-xs border border-black p-2 w-4/5 mt-4"
            >
              Add To Cart • ₦{price}
            </button>

            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        <div className="">
          <p className="text-gray-500 uppercase text-sm font-gajraj">
            related products
          </p>

          <ProductList products={related} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetail;
