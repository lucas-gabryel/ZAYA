import React from "react";
import { InputProps } from "@/app/[locale]/types/types";

export default function Input({
  hasError = false,
  className = "",
  ...rest
}: InputProps) {
  const baseClass =
    "border rounded px-4 py-2 w-full transition-all outline-none";
  const errorClass = hasError
    ? "border-red-500 focus:border-red-500"
    : "border-zinc-300 focus:border-black";

  return (
    <input className={`${baseClass} ${errorClass} ${className}`} {...rest} />
  );
}
