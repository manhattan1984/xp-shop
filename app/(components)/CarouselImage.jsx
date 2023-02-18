import Image from "next/image";
import React from "react";

const CarouselImage = ({src}) => {
  return (
    <>
      <Image
        alt="hoodie"
        // fill={true}
        height={0}
        width={0}
        sizes="20vw"
        className="w-full h-auto"
        src={src}
      />
    </>
  );
};

export default CarouselImage;
