import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import ProductCard from "@/app/components/common/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.bestSale1,
  },
  {
    id: 2,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.bestSale2,
  },
  {
    id: 3,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.bestSale3,
  },
  {
    id: 4,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.bestSale4,
  },
  {
    id: 5,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    originalPrice: 329000,
    discount: "-10%",
    image: images.bestSale5,
  },
];
const RightMenuCategories = () => {
  return (
    <div className="flex flex-col gap-[24px] mt-[24px]">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[24px] leading-[32px] text-text_primary">
          Sản phẩm bán chạy
        </h1>
        <div className="flex items-center gap-[8px] p-[4px_12px] cursor-pointer">
          <span className="font-semibold text-[16px] leading-[24px] text-brand_500">
            Xem tất cả
          </span>
          <Image
            src={svgs.doubleArrowRight}
            width={20}
            height={20}
            alt="double arrow"
          />
        </div>
      </div>

      <div className="flex gap-[16px]">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} type="Category" />
        ))}
      </div>
    </div>
  );
};

export default RightMenuCategories;
