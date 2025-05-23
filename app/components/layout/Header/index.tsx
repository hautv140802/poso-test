import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import SearchInput from "@/app/components/layout/SearchInput";
import Image from "next/image";

const Header = () => {
  return (
    <div className="px-[240px] flex items-center gap-[48px] mt-[24px]">
      <Image
        src={images.logoSunfil}
        alt="logo"
        width={250}
        height={111}
        className="object-cover w-[250px] h-[111px] inline-block"
      />
      <SearchInput />

      <div className="flex justify-center items-start min-w-[355px] gap-[32px]">
        <div className="flex items-center gap-[8px]">
          <Image
            src={images.countryVN}
            width={36}
            height={36}
            alt="country vn"
            className="object-cover"
          />
          <span className="font-medium text-[16px] leading-[16px] text-text_primary">
            VI
          </span>
        </div>

        <div className="flex items-center gap-[8px] ">
          <div className="relative w-[36px] h-[36px]">
            <Image
              src={svgs.cart}
              width={36}
              height={36}
              alt="cart"
              className="object-cover"
            />
            <div className="absolute flex justify-center items-center top-[-11px] right-[-12px] w-[24px] h-[24px] p-[6px_6.5px_2.5px_6px] rounded-full bg-error_main text-white font-medium text-[16px] leading-[16px]">
              12
            </div>
          </div>

          <span className="font-medium text-[16px] leading-[16px] text-text_primary">
            Giỏ hàng
          </span>
        </div>
        <div className="flex items-center gap-[8px]">
          <Image
            src={svgs.account}
            width={36}
            height={36}
            alt="cart"
            className="object-cover"
          />
          <span className="font-medium text-[16px] leading-[16px] text-text_primary">
            Tài khoản
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
