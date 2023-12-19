import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  type,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`custom-btn ${containerStyles}`}
      type={type || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
