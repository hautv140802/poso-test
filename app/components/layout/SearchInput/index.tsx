import svgs from "@/app/assets/svgs";
import { Input } from "antd";
import Image from "next/image";
const SearchInput = () => {
  return (
    <div className="flex border-[2px] border-solid border-brand_500 rounded-full  w-full items-center h-[64px] pl-[20px] pr-[8px] w-full">
      <Input
        placeholder="Tìm kiếm sản phẩm"
        height={20}
        width={108}
        variant="borderless"
        className="font-medium text-[16px] leading-[24px] w-full"
      />
      <Image src={svgs.camera} width={28} height={28} alt="camera" />

      <button className="bg-brand_500 rounded-full p-[12px_24px] ml-[24px]">
        <Image
          src={svgs.magnifer}
          width={28}
          height={28}
          alt="magnifer"
          className="object-cover"
        />
      </button>
    </div>
  );
};

export default SearchInput;
