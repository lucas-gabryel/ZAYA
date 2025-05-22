import React from "react";
import { TextProps } from "@/app/[locale]/types/types";

export const Text = ({
  children,
  size = "base",
  weight = "normal",
  color = "text-gray-800",
}: TextProps) => {
  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const weightClass = {
    normal: "font-normal",
    bold: "font-bold",
    semibold: "font-semibold",
  };

  return (
    <p className={`${sizeClass[size]} ${weightClass[weight]} ${color}`}>
      {children}
    </p>
  );
};
