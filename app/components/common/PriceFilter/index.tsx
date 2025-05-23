import clsx from "clsx";

interface IPriceFilterProps {
  value: string;
  active?: boolean;
  onClick?: () => void;
}
const PriceFilter = (props: IPriceFilterProps) => {
  const { value, active, onClick } = props;
  return (
    <button
      className={clsx(
        "w-full p-[8px] bg-white border-[1px] border-solid  rounded-[4px] text-[14px] font-normal leading-[20px] text-text_primary transition-all duration-500",
        active
          ? "border-brand_600 text-brand_600"
          : "border-[calc(rgba(145,158,171,0.24))]"
      )}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default PriceFilter;
