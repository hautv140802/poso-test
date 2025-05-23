import { Checkbox } from "antd";
import styled from "styled-components";

interface ICheckboxComponentProps {
  label: string;
  value: string;
  amount: number;
}

const StyledCheckBox = styled(Checkbox)`
  .ant-checkbox-label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: "#1C252E";
  }
  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    background-color: "#025FCA";
    border-color: "#025FCA";
  }
`;
const CheckboxComponent = (props: ICheckboxComponentProps) => {
  const { label, value, amount } = props;
  return (
    <div className="flex items-center justify-start w-full">
      <StyledCheckBox value={value}>{label}</StyledCheckBox>
      <span className="font-medium text-[14px] leading-[20px] text-text_secondary">{`(${amount})`}</span>
    </div>
  );
};

export default CheckboxComponent;
