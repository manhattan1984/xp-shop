"use client";
import Image from "next/image";
import CarouselImage from "./(components)/CarouselImage";
import ProductList from "./(components)/ProductList";
import { useCart } from "./(context)/CartContext";

export default function HomePage({ product }) {
  const images = [
    "https://images.unsplash.com/photo-1609873814058-a8928924184a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1633292587737-f898a032e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
    "https://images.unsplash.com/photo-1553728437-e15abbe95e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1609873814058-a8928924184a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1633292587737-f898a032e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
    "https://images.unsplash.com/photo-1553728437-e15abbe95e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1633292587737-f898a032e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
    "https://images.unsplash.com/photo-1553728437-e15abbe95e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1633292587737-f898a032e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
    "https://images.unsplash.com/photo-1553728437-e15abbe95e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
  ];

  return (
    <div className="">
      <section className="flex flex-col justify-center items-center h-screen gap-4 text-center">
        <Image
          src="/floating-with-flacko.png"
          sizes="100%"
          height={0}
          width={0}
          className="w-1/2 h-auto animate-float transform-gpu"
        />
        <p className="text-2xl font-gajraj text-red-500">
          Floating With Flacko
        </p>
        <p className="font-labrada_italic text-lg">you too can defy gravity</p>
      </section>
      <section className="">
        <div className=" w-full overflow-hidden h-full box-content">
          <div className="inline-flex gap-4 animate-slide_through text-black">
            {images.map((image, index) => (
              <CarouselImage src={image} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-center">
        <p className="text-3xl text-black">Featured Clothings</p>
        <ProductList products={product} />
      </section>
    </div>
  );
}
