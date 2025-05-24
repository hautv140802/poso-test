"use client";

import svgs from "@/app/assets/svgs";
import ListCartProduct from "@/app/components/layout/ListCartProduct";
import { Popover } from "antd";
import Image from "next/image";

const Cart = () => {
  return (
    <Popover
      content={<ListCartProduct />}
      title={
        <p className="text-[20px] font-semibold leading-[24px] text-text_primary">
          Giỏ hàng
        </p>
      }
      trigger={["hover", "click"]}
      getPopupContainer={(triggerNode) =>
        triggerNode.parentElement as HTMLElement
      }
    >
      <div className="flex items-center gap-[8px] hover:bg-band_50 cursor-pointer rounded-full p-[4px_8px] w-fit">
        <div className="relative w-[36px] h-[36px]">
          <Image
            src={svgs.cart}
            width={36}
            height={36}
            alt="cart"
            className="object-cover"
          />
          <div className="absolute flex justify-center items-center top-[-14px] right-[-5px] w-[24px] h-[24px] p-[6px_6.5px_2.5px_6px] rounded-full bg-error_main text-white font-medium text-[12px] leading-[16px]">
            12
          </div>
        </div>

        <span className="font-medium text-[16px] leading-[16px] text-text_primary text-nowrap">
          Giỏ hàng
        </span>

        <Popover></Popover>
      </div>
    </Popover>
  );
};

export default Cart;
