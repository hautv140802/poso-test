"use client";

import svgs from "@/app/assets/svgs";
import Image from "next/image";

interface IButtonComponentProps {
  active?: boolean;
  title: string;
  onClick?: () => void;
}

const ButtonComponent = (props: IButtonComponentProps) => {
  const { active, title, onClick } = props;
  if (active)
    return (
      <button
        className="relative p-[8px_16px] bg-white border border-brand_500 leading-[24px] text-brand_500 text-[16px] font-medium rounded-xl overflow-hidden transition-all duration-500"
        onClick={onClick}
      >
        {title}
        <span className="absolute z-30 top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-brand_500 border-l-transparent"></span>
        <Image
          src={svgs.check}
          width={6.25}
          height={5.25}
          alt="check"
          className="absolute top-[8px] right-[5px] z-50"
        />
      </button>
    );

  return (
    <button
      className="bg-white rounded-[8px] border border-transparent p-[8px_16px] font-medium leading-[24px] transition-all duration-500"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
