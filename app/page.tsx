import Image from "next/image";
import CarouselImage from "./(components)/CarouselImage";

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
        <div className="relative h-60 w-60">
          <Image fill={true} src="/xp_logo.png" />
        </div>
        <p className="font-labrada_italic text-2xl">Xquiste Craftmanship</p>
        <p className="text-5xl font-labrada">
          Luxurious <span className="font-labrada_italic font-light">and</span>{" "}
          Contemporary Style for Everyone
        </p>
      </section>
      <section className="">
        <div className="flex items-center gap-4  justify-center transform-gpu animate-slide_through ">
          {images.map((image, key) => (
            <CarouselImage key={key} src={image} />
          ))}
        </div>
      </section>
    </div>
  );
}
