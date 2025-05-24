import LeftMenuCategories from "@/app/components/layout/LeftMenuCategories";
import RightMenuCategories from "@/app/components/layout/RightMenuCategories";
import RightTopMenuCategories from "@/app/components/layout/RightTopMenuCategories";

const ListMenuProduct = () => {
  return (
    <div className="w-[1000px] 3xl:w-[1381.7px] h-fit 3xl:h-[724px] flex gap-[24px] bg-grey_200">
      <LeftMenuCategories />
      <div className="py-[24px] pr-[24px]">
        <RightTopMenuCategories />
        <RightMenuCategories />
      </div>
    </div>
  );
};

export default ListMenuProduct;
