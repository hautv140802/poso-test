"use client";
import svgs from "@/app/assets/svgs";
import SectionFilter, {
  ISectionFilterProps,
} from "@/app/components/pages/home/SectionFilter";
import Image from "next/image";
import React from "react";

const dataFilters: ISectionFilterProps[] = [
  {
    title: "Danh mục sản phẩm",
    type: "checkbox",
    values: [
      {
        title: "Lọc gió Động cơ - Air Filter",
        amount: 24,
        value: "Lọc gió Động cơ - Air Filter",
      },
      {
        title: "Lọc Nhiên Liệu - Fuel Filter",
        amount: 24,
        value: "Lọc Nhiên Liệu - Fuel Filter",
      },
      {
        title: "Bộ lọc dầu",
        amount: 24,
        value: "Bộ lọc dầu",
      },
      {
        title: "Chưa phân loại",
        amount: 24,
        value: "Chưa phân loại",
      },
      {
        title: "Khác",
        amount: 24,
        value: "Khác",
      },
    ],
  },
  {
    title: "Khoảng giá",
    type: "price",
    values: [
      {
        title: "Dưới 100,000 đ",
        value: "smaller_100k",
        amount: 0,
      },
      {
        title: "100,000 đ - 300,000 đ",
        value: "from_100k_to_300k",
        amount: 0,
      },
      {
        title: "300,000 đ - 500,000 đ",
        value: "from_300k_to_500k",
        amount: 0,
      },
      {
        title: "500,000 đ",
        value: "bigger_500k",
        amount: 0,
      },
    ],
  },
  {
    title: "Thương hiệu",
    type: "checkbox",
    values: [
      {
        title: "Asakashi",
        amount: 24,
        value: "Asakashi",
      },
      {
        title: "Bosch",
        amount: 24,
        value: "Bosch",
      },
      {
        title: "Huyndai",
        amount: 24,
        value: "Huyndai",
      },
    ],
  },
  {
    title: "Năm sản xuất",
    type: "checkbox",
    values: [
      {
        title: "2021",
        amount: 24,
        value: "2021",
      },
      {
        title: "2020",
        amount: 24,
        value: "2020",
      },
      {
        title: "2019",
        amount: 24,
        value: "2019",
      },
      {
        title: "2018",
        amount: 24,
        value: "2018",
      },
    ],
  },
  {
    title: "Xuất xứ",
    type: "checkbox",
    values: [
      {
        title: "Đức",
        amount: 24,
        value: "germany",
      },
      {
        title: "Nhật",
        amount: 24,
        value: "japany",
      },
      {
        title: "Trung Quốc",
        amount: 24,
        value: "China",
      },
    ],
  },
];
const MenuFilter = () => {
  return (
    <div className="min-w-[300px] py-[12px] bg-white h-fit rounded-[8px]">
      <div className="flex items-end gap-[12px] p-[12px]">
        <Image src={svgs.filter} width={32} height={32} alt="filter" />

        <p className="text-brand_500 font-bold text-[24px] leading-[32px]">
          Bộ lộc
        </p>
      </div>
      <div>
        {dataFilters.map((item, index) => (
          <SectionFilter {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
