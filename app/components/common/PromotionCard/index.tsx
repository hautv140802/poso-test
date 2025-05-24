import Image from "next/image";

interface IPromotionCardProps {
  icon: string;
  title: string;
  note: string;
}
const PromotionCard = (props: IPromotionCardProps) => {
  const { icon, title, note } = props;
  return (
    <div className="flex items-center p-[16px] rounded-[12px] gap-[14px] bg-white w-[250px] 3xl:w-[336px] h-[150px] 3xl:h-[101px] shadow-custom-soft">
      <Image src={icon} width={48} height={48} alt="money" />
      <div className="flex flex-col gap-[8px]">
        <h2 className="font-bold text-[16px] leading-[1.2] text-text_primary ">
          {title}
        </h2>
        <p className="font-medium text-[14px] leading-[1.5] text-text_secondary w-full">
          {note}
        </p>
      </div>
    </div>
  );
};

export default PromotionCard;
