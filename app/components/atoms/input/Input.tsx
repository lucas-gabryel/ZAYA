import React from "react";
import { InputProps } from "@/app/types/types";

export default function Input({ ...rest }: InputProps) {
  return <input className="border rounded px-3 py-2 w-full" {...rest} />;
}
