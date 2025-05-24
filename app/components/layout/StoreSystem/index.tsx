import svgs from "@/app/assets/svgs";
import Image from "next/image";

const StoreSystem = () => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-band_50 p-[32px_240px] flex items-center justify-between">
      <div className="flex items-center gap-[16px] justify-start">
        <Image src={svgs.map} width={48} height={48} alt="map" />
        <p className="text-text_primary font-medium text-[28px] leading-[28px] translate-y-[6px]">
          Xem hệ thống 88 cửa hàng trên toàn quốc
        </p>
      </div>

      <button className="flex items-center gap-[12px] text-brand_600 font-semibold text-[24px] leading-[24px] bg-white p-[12px_24px] rounded-full">
        Xem ngay
        <Image src={svgs.arrow} width={32} height={32} alt="arrow" />
      </button>
    </div>
  );
};

export default StoreSystem;
