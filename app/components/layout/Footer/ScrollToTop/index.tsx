"use client";

import svgs from "@/app/assets/svgs";
import Image from "next/image";

const ScrollTop = () => {
  return (
    <div
      className="absolute bottom-[88.67px] right-[48px] cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image src={svgs.arrowRound} width={40} height={40} alt="arrow round" />
    </div>
  );
};

export default ScrollTop;
