import svgs from "@/app/assets/svgs";
import { formatCurrency } from "@/app/utils/fuctions/formatText";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface IProductCardProps {
  type?: "Banner" | "List" | "Cart" | "Category";
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: StaticImageData;
  tag?: string;
  buttonLabel?: string;
}

const ProductCard = (props: IProductCardProps) => {
  const {
    type = "Banner",
    name,
    price,
    originalPrice,
    discount,
    image,
  } = props;
  const variantSize = {
    Banner: "w-[252.8px] h-[495.8px]",
    List: "w-[261.25px] h-[504.25px]",
    Cart: "w-[214px] h-[457px]",
    Category: "w-[200px] h-[354px]",
  };

  const variantImage: Record<
    string,
    {
      height: number;
      width: number;
      class: string;
    }
  > = {
    Category: {
      height: 184,
      width: 184,
      class: "inline-block w-[184px] h-[184px] object-cover",
    },

    Banner: {
      height: 236.8,
      width: 236.8,
      class: "inline-block w-[236.8px] h-[236.8px]",
    },
    List: {
      height: 245.25,
      width: 245.25,
      class: "inline-block w-[245.25px] h-[245.25px]",
    },
    Cart: {
      height: 198,
      width: 198,
      class: "inline-block w-[198px] h-[198px]",
    },
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
          src={image}
          width={variantImage[type]?.width || 0}
          height={variantImage[type]?.height || 0}
          alt="product"
          className={clsx(
            variantImage[type]?.class || "",
            "rounded-[8px] object-contain"
          )}
        />
      </div>

      <div
        className={clsx(
          type !== "Category" ? "p-[16px_24px_24px]" : "p-[16px_24px_0]"
        )}
      >
        {type !== "Category" && (
          <div className="bg-yellow-gradient rounded-full flex items-center gap-[6px] p-[2px_10px] h-[25px] w-fit">
            <Image
              src={svgs.fire}
              width={16}
              height={16}
              alt="fire"
              className="in-block w-[16px] h-[16px]"
            />
            <span className="text-error_darker font-semibold text-[14px] leading-[1.5] inline-block align-middle">
              Giá cực sốc
            </span>
          </div>
        )}
        <p className="line-clamp-2 text-[16px] leading-[24px] font-semibold text-text_primary text-left mt-[15.8px]">
          {name}
        </p>
        <p className="text-error_darker font-semibold text-[20px] leading-[24px] mt-[10px]">
          {formatCurrency(price)}
        </p>

        <p className="font-normal text-[14px] leading-[24px] text-text_disabled mt-[8px]">
          <span className="line-through font-normal text-[14px] leading-[24px]">
            {formatCurrency(originalPrice)}{" "}
          </span>
          <span className="ml-[10px] text-error_darker text-[12px] font-medium">
            {discount}
          </span>
        </p>

        {type !== "Category" && (
          <button className="text-brand_500 bg-band_50 rounded-[8px] w-full py-[8px] mt-[8px] font-semibold">
            Mua ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
