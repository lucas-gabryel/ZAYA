import React from "react";
import { IconProps } from "@/app/[locale]/types/types";

export const Icon = ({
  icon: IconComponent,
  size = 20,
  className = "",
}: IconProps) => {
  return <IconComponent size={size} className={className} />;
};
