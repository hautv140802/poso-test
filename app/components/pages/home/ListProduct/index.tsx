"use client";

import images from "@/app/assets/images";
import ButtonComponent from "@/app/components/common/Button";
import ProductCard from "@/app/components/common/ProductCard";
import MenuFilter from "@/app/components/pages/home/MenuFilter";
import PriceSort from "@/app/components/pages/home/PriceSort";
import { useState } from "react";

const menuQuickFilters = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
const products = [
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product2,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product6,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product1,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product5,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product2,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product6,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product1,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product5,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product2,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product6,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product1,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product5,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product2,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product6,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product1,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.product5,
    tag: "Bán chạy",
    buttonLabel: "Mua ngay",
  },
];
const ListProduct = () => {
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("Liên quan");
  return (
    <div className="mt-[32px] flex gap-[20px] bg-grey_200">
      <MenuFilter />
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[20px] text-text_primary leading-[28px]">
            Danh sách sản phẩm
          </span>
          <div className="flex items-center gap-[24px]">
            <span className="font-medium text-[16px] text-text_primary">
              Sắp xếp theo
            </span>
            <div className="flex items-center gap-[12px]">
              {menuQuickFilters.map((item, index) => (
                <ButtonComponent
                  active={item === selectedQuickFilter}
                  title={item}
                  key={index}
                  onClick={() => setSelectedQuickFilter(item)}
                />
              ))}

              <PriceSort />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] w-full">
          {products.map((item, index) => (
            <ProductCard key={index} type="List" {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
