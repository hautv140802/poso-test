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
import images from "@/app/assets/images";

export const products = [
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product1,
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product2,
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product3,
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product4,
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product5,
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product6,
  },
];

const SwiperProduct = () => {
  return (
    <div className="relative bg-brand_500 rounded-b-[12px] w-full h-[450px] 3xl:h-[591.8px] p-[48px]">
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
        {products.map((item, index) => (
          <SwiperSlide
            key={index}
            className={clsx("!w-fit", index < 10 ? "mr-[20px]" : "mr-[5px]")}
          >
            <ProductCard type="Banner" {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProduct;
