"use client";

import svgs from "@/app/assets/svgs";
import ListMenuProduct from "@/app/components/layout/ListMenuProduct";
import { Popover } from "antd";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

.menu-categories.ant-popover {
  .ant-popover-content {
    border-bottom-right-radius: 12px; 
    border-bottom-left-radius: 12px;
    overflow: hidden;
    .ant-popover-inner {
      padding: 4px;
    }
  }
}

`;
const MenuCategories = () => {
  return (
    <>
      <GlobalStyle />
      <Popover
        content={<ListMenuProduct />}
        trigger={["hover", "click"]}
        getPopupContainer={(triggerNode) =>
          triggerNode.parentElement as HTMLElement
        }
        placement="bottomLeft"
        arrow={false}
        align={{
          offset: [0, 25],
        }}
        rootClassName="menu-categories"
      >
        <button className="flex items-center gap-[8px] p-[12px_16px] bg-[#0155C6] rounded-[8px] text-white font-bold text-[16px]">
          <Image src={svgs.menu} width={18} height={18} alt="menu" />
          <span className="text-inherit translate-y-[0.5px]">
            Danh mục sản phẩm
          </span>
          <Image src={svgs.chevronDown} width={18} height={18} alt="menu" />
        </button>
      </Popover>
    </>
  );
};

export default MenuCategories;
