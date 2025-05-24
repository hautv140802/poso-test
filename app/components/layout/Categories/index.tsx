import svgs from "@/app/assets/svgs";
import MenuCategories from "@/app/components/layout/MenuCategories";
import Image from "next/image";

const Categories = () => {
  const menuItems = ["Về chúng tôi", "Bài viết", "Catalog", "Liên hệ"];

  const menuPromotions = [
    {
      icon: svgs.support,
      title: "Hỗ trợ 24/7",
    },
    {
      icon: svgs.freeShip,
      title: "Miễn phí vận chuyển",
    },
    {
      icon: svgs.delivery,
      title: "Giao hàng nhanh 2h",
    },
    {
      icon: svgs.returnIcon,
      title: "30 ngày đổi trả",
    },
  ];
  return (
    <div className="px-[240px] mt-[24px] flex items-center justify-between gap-[24px]">
      <div className="flex items-center gap-[24px]">
        <MenuCategories />

        <ul className="flex items-center gap-[20px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="font-medium text-[16px] leading-[24px] text-text_primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center gap-[20px]">
        {menuPromotions.map((item, index) => (
          <li
            key={index}
            className="flex font-semibold text-[16px] gap-[8px] items-center leading-[24px] text-text_primary"
          >
            <Image src={item.icon} width={24} height={24} alt="icon" />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
