import svgs from "@/app/assets/svgs";
import Image from "next/image";
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex bg-custom-gradient p-[4px_240px] gap-[8px] items-center justify-between">
      <div className="flex gap-[8px] items-center justify-start">
        <Image src={svgs.sale} width={16} height={16} alt="sale" />
        <span className="font-normal text-[14px] leading-[20px] text-secondary_50 inline-block align-middle translate-y-[1px]">
          Nhập mã{" "}
          <span className="font-bold text-[12px] leading-[16px] text-yellow_primary align-middle">
            NEWBIE
          </span>{" "}
          giảm ngay 10% cho lần đầu mua hàng.
        </span>
      </div>

      <div className="flex gap-[24px] items-center justify-start">
        <div className="flex gap-[8px] items-center justify-start">
          <Image src={svgs.phoneRounded} width={16} height={16} alt="phone" />
          <span className="font-normal text-[14px] leading-[20px] text-secondary_50 align-middle translate-y-[1px]">
            Hotline:{" "}
            <span className="font-bold text-[12px] leading-[16px] text-yellow_primary align-middle">
              0283 760 7607
            </span>
          </span>
        </div>

        <div className="flex gap-[8px] items-center justify-start">
          <Image src={svgs.smartphone} width={16} height={16} alt="phone" />
          <span className="font-normal text-[14px] leading-[20px] text-secondary_50 align-middle translate-y-[1px]">
            Tải ứng dụng
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
