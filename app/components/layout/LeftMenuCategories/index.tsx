"use client";

import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const dataLefts = [
  { id: 1, title: "Bộ Lọc Dầu", image: images.boLocDau },
  { id: 2, title: "Bộ Lọc Không Khí", image: images.img2 },
  { id: 3, title: "Bộ Lọc Nhiên Liệu", image: images.img3 },
  { id: 4, title: "Bộ Lọc Trong Cabin", image: images.img4 },
  { id: 5, title: "Bộ Lọc Không Khí", image: images.img5 },
  { id: 6, title: "Bộ Lọc Trong Cabin", image: images.img8 },
  { id: 7, title: "Bộ Lọc Nhiên Liệu", image: images.img7 },
  { id: 8, title: "Bộ Lọc Không Khí", image: images.img6 },
];

const LeftMenuCategories = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="bg-white min-w-[263.7px] flex flex-col gap-[12px]">
      {dataLefts.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "flex justify-between items-center p-[4px_16px] border-l-[3px] cursor-pointer duration-300 transition-all h-[72px] ",
            selected === item.id
              ? "border-[#0D57C6] bg-grey_200"
              : "border-transparent"
          )}
          onClick={() => setSelected(item.id)}
        >
          <div className="flex items-center gap-[12px]">
            <Image src={item.image} width={40} height={40} alt="category" />
            <p className="font-semibold text-[16px] text-brand_700 leading-[24px]">
              {item.title}
            </p>
          </div>

          <Image
            src={svgs.arrowRightBlue}
            width={14}
            height={14}
            alt="category"
          />
        </div>
      ))}
    </div>
  );
};

export default LeftMenuCategories;
