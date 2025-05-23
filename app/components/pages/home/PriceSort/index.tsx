"use client";

import svgs from "@/app/assets/svgs";
import { Select } from "antd";
import Image from "next/image";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
    padding: 0 24px 0 0 !important;
  }

  .ant-select-selection-item {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #1c252e !important;
  }
`;
const PriceSort = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium text-[16px] leading-[24px]">Giá:</span>
      <StyledSelect
        defaultValue={"asc"}
        options={[
          { value: "asc", label: "Thấp → Cao" },
          { value: "desc", label: "Cao → Thấp" },
        ]}
        variant="borderless"
        className="-translate-y-[2px]"
        suffixIcon={
          <Image src={svgs.endIcon} width={24} height={24} alt="icon" />
        }
      />
    </div>
  );
};

export default PriceSort;
