import React from "react";
import { ButtonProps } from "@/app/[locale]/types/types";

export default function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded font-semibold";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
