import images from "@/app/assets/images";
import Image from "next/image";

const menuRightTop = [
  {
    id: 1,
    image: images.bocLocGio1,
    title: "Bộ lọc gió",
  },
  {
    id: 2,
    image: images.bocLocGio2,
    title: "Bộ lọc gió",
  },
  {
    id: 3,
    image: images.bocLocGio2,
    title: "Bộ lọc gió",
  },
  {
    id: 4,
    image: images.bocLocGio1,
    title: "Bộ lọc gió",
  },
  {
    id: 5,
    image: images.bocLocGio2,
    title: "Bộ lọc gió",
  },
  {
    id: 6,
    image: images.bocLocGio2,
    title: "Bộ lọc gió",
  },
];

const RightTopMenuCategories = () => {
  return (
    <div className="grid grid-cols-2 3xl:grid-cols-3 gap-[16px] pb-[28px] border-b-[1px] border-solid border-[calc(rgba(145, 158, 171, 0.24))]">
      {menuRightTop.map((item, index) => (
        <div
          key={index}
          className="p-[12px_16px] rounded-[12px] bg-white flex items-center gap-[16px] w-[344px] h-[94px] cursor-pointer"
        >
          <Image src={item.image} width={70} height={70} alt="bo loc gio" />
          <p className="font-medium text-[16px] leading-[1.5] text-text_primary">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightTopMenuCategories;
