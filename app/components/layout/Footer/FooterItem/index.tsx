import clsx from "clsx";
import { ReactNode } from "react";

interface IFooterItemProps {
  label: ReactNode;
  title?: string;
  labelClassName?: string;
}

const FooterItem = (props: IFooterItemProps) => {
  const { label, title, labelClassName } = props;
  return (
    <p
      className={clsx(
        "text-[16px] leading-[24px] font-normal text-text_secondary cursor-pointer",
        labelClassName
      )}
    >
      {label}
      {title && (
        <span className="text-text_secondary font-medium">{title}</span>
      )}
    </p>
  );
};

export default FooterItem;
