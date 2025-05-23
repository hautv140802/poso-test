import svgs from "@/app/assets/svgs";
import PriceFilter from "@/app/components/common/PriceFilter";
import CheckboxComponent from "@/app/components/common/Select";
import { Checkbox } from "antd";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export interface ISectionFilterProps {
  title: string;
  type: "checkbox" | "price";
  values: {
    title: string;
    amount: number;
    value: string;
  }[];
}
const SectionFilter = (props: ISectionFilterProps) => {
  const { title, type, values } = props;
  const [toggleSection, setToggleSection] = useState(true);
  const [selectedPrice, setPriceSelected] = useState<string>();
  return (
    <div className="w-full p-[12px] border-t-[1px] border-solid border-[calc(rgba(145,158,171,0.2)]">
      <div className="flex justify-between items-center pb-[16px]">
        <p className="text-[20px] font-semibold leading-[28px] text-text_primary">
          {title}
        </p>
        <div
          className="cursor-pointer"
          onClick={() => setToggleSection(!toggleSection)}
        >
          <Image
            src={svgs.arrowUp}
            width={24}
            height={24}
            alt="arrow up"
            className={clsx(
              "transition-all duration-500",
              toggleSection ? "rotate-0" : "rotate-180"
            )}
          />
        </div>
      </div>

      {type === "checkbox" ? (
        <div
          className={clsx(
            "transition-all duration-700",
            toggleSection ? "block" : "hidden"
          )}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            className="flex flex-col gap-[12px]"
          >
            {values?.map((item, index) => (
              <CheckboxComponent
                key={index}
                amount={item.amount}
                label={item.title}
                value={item.value}
              />
            ))}
          </Checkbox.Group>
        </div>
      ) : (
        <div
          className={clsx(
            "flex flex-col gap-[8px] transition-all duration-700",
            toggleSection ? "block" : "hidden"
          )}
        >
          {values?.map((item, index) => (
            <PriceFilter
              key={index}
              value={item.title}
              active={selectedPrice === item.value}
              onClick={() => setPriceSelected(item.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionFilter;
