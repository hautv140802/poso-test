import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import Cart from "@/app/components/layout/Cart";
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
        className="object-cover w-[250px] h-[111px] hidden 3xl:inline-block"
      />

      <Image
        src={images.logoSunfil}
        alt="logo"
        width={150}
        height={70}
        className="object-cover w-[150px] h-[70px] inline-block 3xl:hidden"
      />
      <SearchInput />

      <div className="flex justify-center min-w-[200px] items-start 3xl:min-w-[355px] gap-[14px]">
        <div className="flex items-center gap-[8px] p-[4px_8px]">
          <Image
            src={images.countryVN}
            width={36}
            height={36}
            alt="country vn"
            className="object-cover"
          />
          <span className="font-medium text-[16px] leading-[16px] text-text_primary hidden 3xl:block">
            VI
          </span>
        </div>

        <Cart />
        <div className="flex items-center gap-[8px] p-[4px_8px]">
          <Image
            src={svgs.account}
            width={36}
            height={36}
            alt="cart"
            className="object-cover"
          />
          <span className="font-medium text-[16px] leading-[16px] text-text_primary text-nowrap hidden 3xl:block">
            Tài khoản
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
