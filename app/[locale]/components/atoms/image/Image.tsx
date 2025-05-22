import React from "react";
import { ImageProps } from "@/app/[locale]/types/types";

export const Image = ({ ...rest }: ImageProps) => {
  return <img className="object-cover w-full h-auto" {...rest} />;
};
