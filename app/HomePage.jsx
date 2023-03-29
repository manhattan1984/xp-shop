"use client";
import Image from "next/image";
import Link from "next/link";
import CarouselImage from "./(components)/CarouselImage";
import PageWrapper from "./(components)/PageWrapper";
import ProductList from "./(components)/ProductList";
import { useCart } from "./(context)/CartContext";

export default function HomePage({ product }) {
  return (
    <PageWrapper className="">
      <div >
        <Image
          src="https://smnxrunawxkkojkyomhc.supabase.co/storage/v1/object/public/products/floating-with-flacko.png"
          sizes="100%"
          height={0}
          width={0}
          className="w-full h-[40vh] md:h-screen object-contain bg-[#ea2225]"
        />
      </div>
      <section className="text-center my-4 mx-2 flex flex-col gap-3 max-w-lg md:mx-auto">
        <p className="text-3xl">𝕱𝖑𝖔𝖆𝖙𝖎𝖓𝖌 𝖂𝖎𝖙𝖍 𝕱𝖑𝖆𝖈𝖐𝖔</p>
        <p>
          𝕱𝖑𝖔𝖆𝖙𝖎𝖓𝖌 𝖂𝖎𝖙𝖍 𝕱𝖑𝖆𝖈𝖐𝖔 is an aesthetic art influenced street wear
          clothing line & art brand created by Lyrc “George E. Noel”, my line up
          includes everything from printed Ts, diy painted denims, art portraits
          and etc it’s a fusion of my art works ranging from NFTs to doodle’s,
          my merch is infused with subliminal messages and emotions it’s therapy
          to me & I hope it would be to you too.Get art that makes you feel
          something, you too can defy gravity under the influence of this
          garment.{" "}
        </p>
        {/* <p>
          {" "}
          𝕱𝖑𝖔𝖆𝖙𝖎𝖓𝖌 𝖂𝖎𝖙𝖍 𝕱𝖑𝖆𝖈𝖐𝖔 𝔦𝔰 𝔞𝔫 𝔞𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠 𝔞𝔯𝔱 𝔦𝔫𝔣𝔩𝔲𝔢𝔫𝔠𝔢𝔡 𝔰𝔱𝔯𝔢𝔢𝔱 𝔴𝔢𝔞𝔯
          𝔠𝔩𝔬𝔱𝔥𝔦𝔫𝔤 𝔩𝔦𝔫𝔢 & 𝔞𝔯𝔱 𝔟𝔯𝔞𝔫𝔡 𝕺𝖓 𝖆𝖓 𝖆𝖗𝖙𝖎𝖘𝖙𝖎𝖈 𝖙𝖆𝖐𝖊 𝖔𝖓 𝖘𝖊𝖑𝖋 𝖊𝖝𝖕𝖗𝖊𝖘𝖘𝖎𝖔𝖓
          𝔠𝔯𝔢𝔞𝔱𝔢𝔡 𝔟𝔶 𝔏𝔶𝔯𝔠 “George Noel Ebinabote”, 𝔪𝔶 𝔩𝔦𝔫𝔢 𝔲𝔭 𝔦𝔫𝔠𝔩𝔲𝔡𝔢𝔰
          𝔢𝔳𝔢𝔯𝔶𝔱𝔥𝔦𝔫𝔤 𝔣𝔯𝔬𝔪 𝔭𝔯𝔦𝔫𝔱𝔢𝔡 𝔗𝔰, 𝔡𝔦𝔶 𝔭𝔞𝔦𝔫𝔱𝔢𝔡 𝔡𝔢𝔫𝔦𝔪𝔰, 𝔞𝔯𝔱 𝔭𝔬𝔯𝔱𝔯𝔞𝔦𝔱𝔰 𝔞𝔫𝔡 𝔢𝔱𝔠
          𝔦𝔱’𝔰 𝔞 𝔣𝔲𝔰𝔦𝔬𝔫 𝔬𝔣 𝔪𝔶 𝔞𝔯𝔱 𝔴𝔬𝔯𝔨𝔰 𝔯𝔞𝔫𝔤𝔦𝔫𝔤 𝔣𝔯𝔬𝔪 𝔑𝔉𝔗𝔰 𝔱𝔬 𝔡𝔬𝔬𝔡𝔩𝔢’𝔰, 𝔪𝔶 𝔪𝔢𝔯𝔠𝔥
          𝔦𝔰 𝔦𝔫𝔣𝔲𝔰𝔢𝔡 𝔴𝔦𝔱𝔥 𝔰𝔲𝔟𝔩𝔦𝔪𝔦𝔫𝔞𝔩 𝔪𝔢𝔰𝔰𝔞𝔤𝔢𝔰 𝔞𝔫𝔡 𝔢𝔪𝔬𝔱𝔦𝔬𝔫𝔰 𝔦𝔱’𝔰 𝔱𝔥𝔢𝔯𝔞𝔭𝔶 𝔱𝔬 𝔪𝔢 &
          ℑ 𝔥𝔬𝔭𝔢 𝔦𝔱 𝔴𝔬𝔲𝔩𝔡 𝔟𝔢 𝔱𝔬 𝔶𝔬𝔲 𝔱𝔬𝔬.𝔊𝔢𝔱 𝔞𝔯𝔱 𝔱𝔥𝔞𝔱 𝔪𝔞𝔨𝔢𝔰 𝔶𝔬𝔲 𝔣𝔢𝔢𝔩 𝔰𝔬𝔪𝔢𝔱𝔥𝔦𝔫𝔤,
          𝔶𝔬𝔲 𝔱𝔬𝔬 𝔠𝔞𝔫 𝔡𝔢𝔣𝔶 𝔤𝔯𝔞𝔳𝔦𝔱𝔶 𝔲𝔫𝔡𝔢𝔯 𝔱𝔥𝔢 𝔦𝔫𝔣𝔩𝔲𝔢𝔫𝔠𝔢 𝔬𝔣 𝔱𝔥𝔦𝔰 𝔤𝔞𝔯𝔪𝔢𝔫𝔱.
        </p> */}

        <Link
          href="/products"
          className="bg-red-600 text-white p-2 mt-4 mx-auto"
        >
          SHOP NOW
        </Link>
      </section>
      {/* <section className="">
        <div className=" w-full overflow-hidden h-full box-content">
          <div className="inline-flex gap-4 animate-slide_through text-black">
            {images.map((image, index) => (
              <CarouselImage src={image} key={index} />
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-white text-center">
        <p className="text-3xl text-black py-4">Featured Clothings</p>
        <ProductList products={product} />
      </section>
    </PageWrapper>
  );
}
