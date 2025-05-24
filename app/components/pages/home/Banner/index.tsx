import images from "@/app/assets/images";
import SwiperProduct from "@/app/components/pages/home/SwiperProduct";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="rounded-t-[12px] mt-[32px]">
        <Image
          src={images.banner}
          width={1440}
          height={500}
          alt="banner"
          className="object-cover"
        />
      </div>

      <SwiperProduct />
    </>
  );
};

export default Banner;
