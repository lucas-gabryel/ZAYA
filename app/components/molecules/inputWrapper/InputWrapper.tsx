import React from "react";
import { InputWrapperProps } from "@/app/types/types";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";

export function InputWrapper({ label, htmlFor, ...rest}: InputWrapperProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input id={htmlFor} {...rest}/>
    </div>
  );
}
