import Image from "next/image";

interface IPromotionCardProps {
  icon: string;
  title: string;
  note: string;
}
const PromotionCard = (props: IPromotionCardProps) => {
  const { icon, title, note } = props;
  return (
    <div className="flex items-center p-[16px] rounded-[12px] gap-[16px] bg-white w-[336px] h-[101px] shadow-custom-soft">
      <Image src={icon} width={48} height={48} alt="money" />
      <div className="flex flex-col gap-[8px]">
        <h2 className="font-bold text-[16px] leading-[1.2] text-text_primary">
          {title}
        </h2>
        <p className="font-medium text-[14px] leading-[1.5] text-text_secondary">
          {note}
        </p>
      </div>
    </div>
  );
};

export default PromotionCard;
