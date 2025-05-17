import React from "react";
import { LabelProps } from "@/app/types/types";

export default function Label({ children, ...rest }: LabelProps) {
  return <label className="block text-sm font-medium text-gray-700 mb-1" {...rest}>{children}</label>;
}
