"use client";

import ProductCard from "@/app/components/common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import svgs from "@/app/assets/svgs";
import clsx from "clsx";
const SwiperProduct = () => {
  return (
    <div className="relative bg-brand_500 rounded-b-[12px] w-full h-[591.8px] p-[48px]">
      <div className="cursor-pointer absolute w-[40px] flex justify-center items-center h-[40px] rounded-full bg-brand_100 swiper-button-prev !left-[30px] top-[50%] z-10 text-black">
        <Image src={svgs.arrowLeft} width={24} height={24} alt="arrow left" />
      </div>
      <div className="cursor-pointer absolute w-[40px] h-[40px] flex justify-center items-center rounded-full bg-brand_100 swiper-button-next !right-[30px] top-[50%] z-10 text-black">
        <Image
          src={svgs.arrowLeft}
          width={24}
          height={24}
          alt="arrow left"
          className="rotate-180"
        />
      </div>
      <Swiper
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, FreeMode]}
        freeMode={true}
      >
        {Array.from({
          length: 10,
        }).map((_, index) => (
          <SwiperSlide
            key={index}
            className={clsx("!w-fit", index < 10 ? "mr-[20px]" : "mr-[5px]")}
          >
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProduct;
