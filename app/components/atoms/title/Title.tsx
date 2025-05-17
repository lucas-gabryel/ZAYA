import React from "react";
import { TitleProps } from "@/app/types/types";

export const Title = ({ children, level = 1 }: TitleProps) => {
  const tagMap = {
    1: "h1",
    2: "h2",
    3: "h3",
  } as const;

  const Tag = tagMap[level];

  const sizeClass = {
    1: "text-3xl",
    2: "text-2xl",
    3: "text-xl",
  };

  return <Tag className={`${sizeClass[level]} font-bold`}>{children}</Tag>;
};
