"use client";
import svgs from "@/app/assets/svgs";
import { Breadcrumb, BreadcrumbProps } from "antd";
import Image from "next/image";
import styled from "styled-components";

const BreadcrumbStyle = styled(Breadcrumb)`
  li .ant-breadcrumb-link {
    color: #919eab;
    font-weight: 400;
  }

  li:last-child {
    .ant-breadcrumb-link {
      color: #024897;
      font-weight: 700;
    }
  }

  .ant-breadcrumb-separator {
    margin: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BreadcrumbComponent = (props: BreadcrumbProps) => {
  const items = [
    {
      title: "Trang chủ",
    },
    { title: "Sản phẩm" },
  ];

  return (
    <BreadcrumbStyle
      {...props}
      items={items}
      className="text-[16px] font-semibold"
      separator={
        <Image src={svgs.arrowRight} width={8} height={8} alt="arrow" />
      }
    />
  );
};

export default BreadcrumbComponent;
