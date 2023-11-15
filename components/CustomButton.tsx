import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  type,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={type || "button"}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
