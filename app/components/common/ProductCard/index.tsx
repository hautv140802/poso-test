import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import clsx from "clsx";
import Image from "next/image";

interface IProductCardProps {
  type?: "Banner" | "List";
}

const ProductCard = (props: IProductCardProps) => {
  const { type = "Banner" } = props;
  const variantSize = {
    Banner: "w-[252.8px] h-[495.8px]",
    List: "w-[261.25px] h-[504.25px]",
  };
  return (
    <div
      className={clsx(
        "rounded-[8px] bg-white shadow-card-1",
        variantSize[type]
      )}
    >
      <div className="p-[8px]">
        <Image
          src={images.img1}
          width={236.8}
          height={236.79}
          alt="product"
          className="mx-auto"
        />
      </div>

      <div className="p-[16px_24px_24px]">
        <div className="bg-yellow-gradient rounded-full flex items-center gap-[6px] p-[2px_10px] h-[25px] w-fit">
          <Image src={svgs.fire} width={16} height={16} alt="fire" />
          <span className="text-error_darker font-semibold text-[12px] inline-block align-middle">
            Giá cực sốc
          </span>
        </div>
        <p className="line-clamp-2 text-[16px] leading-[24px] font-semibold text-text_primary text-left mt-[15.8px]">
          Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer
          (52046262)
        </p>
        <p className="text-error_darker font-semibold text-[20px] leading-[24px] mt-[10px]">
          299,000 đ
        </p>

        <p className="font-normal text-[14px] leading-[24px]  text-text_disabled mt-[8px]">
          <span className="line-through"> 329,000 đ </span>
          <span className="ml-[10px] text-error_darker">-10%</span>
        </p>

        <button className="text-brand_500 bg-band_50 rounded-[8px] w-full py-[8px] mt-[8px] font-semibold">
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
