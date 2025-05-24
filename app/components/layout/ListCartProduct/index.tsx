import ProductCard from "@/app/components/common/ProductCard";
import React from "react";

const ListCartProduct = () => {
  return (
    <div className="flex flex-wrap max-w-[710px] gap-[12px] max-h-[500px] overflow-y-auto bg-grey_200 p-[12px]">
      {Array.from({
        length: 5,
      }).map((_, index) => (
        <ProductCard key={index} type="Cart" />
      ))}
    </div>
  );
};

export default ListCartProduct;
