import svgs from "@/app/assets/svgs";
import PromotionCard from "@/app/components/common/PromotionCard";

const dataPromotions = [
  {
    icon: svgs.money,
    title: "Miễn phí vận chuyển",
    note: "Với hoá đơn từ 1 triệu",
  },
  {
    icon: svgs.sp_promotion,
    title: "Hỗ trợ 24/7",
    note: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
  },
  {
    icon: svgs.delivery_promotion,
    title: "Giao hàng nhanh 2h",
    note: "Trong vòng bán kính 10km nội thành TP HCM",
  },
  {
    icon: svgs.package_promotion,
    title: "30 ngày đổi trả",
    note: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
  },
];
const Promotions = () => {
  return (
    <div className="w-full py-[40px] mt-[32px] flex items-center gap-[32px]">
      {dataPromotions.map((item, index) => (
        <PromotionCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Promotions;
