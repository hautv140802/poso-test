import images from "@/app/assets/images";
import ProductCard from "@/app/components/common/ProductCard";
import React from "react";
export const popularProducts = [
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

const ListCartProduct = () => {
  return (
    <div className="flex flex-wrap max-w-[705px] gap-[12px] max-h-[500px] overflow-y-auto bg-grey_200 p-[12px] mx-auto rounded-[12px]">
      {popularProducts.map((item, index) => (
        <ProductCard key={index} {...item} type="Cart" />
      ))}
    </div>
  );
};

export default ListCartProduct;
