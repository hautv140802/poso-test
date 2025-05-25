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
      <div className="3xl:flex items-center gap-[24px] hidden">
        <MenuCategories />

        <ul className="3xl:flex items-center gap-[20px] hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="font-medium text-[16px] leading-[24px] text-text_primary cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-[12px] justify-end items-end">
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
      </div>

      <div className="3xl:hidden flex-col gap-[16px] flex w-full">
        <ul className="flex items-center gap-[20px] mx-auto">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="font-medium text-[16px] leading-[24px] text-text_primary cursor-pointer hover:underline underline-offset-2 hover:text-brand_600 duration-300 transition-all"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center gap-[16px] w-full">
          <MenuCategories />
          <ul className="flex items-center gap-[20px]">
            {menuPromotions.map((item, index) => (
              <li
                key={index}
                className="flex font-semibold text-[14px] gap-[8px] items-center leading-[22px] text-text_primary"
              >
                <Image src={item.icon} width={18} height={18} alt="icon" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="flex flex-col gap-[12px] justify-end items-end">
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
      </div> */}
    </div>
  );
};

export default Categories;
