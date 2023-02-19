import Image from "next/image";
import CarouselImage from "./(components)/CarouselImage";
import ProductList from "./(components)/ProductList";
import { clothes } from "./(data)/cartitems";

export default function Home() {
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
        {/* <div className="relative  h-60 w-60 -z-10"> */}
          {/* <Image alt="" fill={true} src="/xp_logo.png" /> */}
          <p className="text-9xl font-gajraj text-center">XP</p>
        {/* </div> */}
        <p className="font-labrada_italic text-2xl">Xquiste Craftmanship</p>
        <p className="text-5xl font-labrada">
          Luxurious <span className="font-labrada_italic font-light">and</span>{" "}
          Contemporary Style for Everyone
        </p>
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
      <section className="h-full w-full bg-white text-black">
        <div className="flex flex-wrap p-2 gap-6 justify-center w-full uppercase">
          <ProductList products={clothes} />
        </div>
      </section>
    </div>
  );
}
