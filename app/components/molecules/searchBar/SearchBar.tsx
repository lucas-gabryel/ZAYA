import React from "react";
import { SearchBarProps } from "@/app/types/types";
import { FiSearch } from "react-icons/fi";
import { Icon } from "../../atoms/icon/Icon";

export function SearchBar({ placeholder, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 border px-2 py-1 bg-white rounded-2xl">
      <Icon icon={FiSearch} size={24} className="text-black"/>
      <input type="text" placeholder={placeholder} onChange={onChange} className="border-none outline-none w-full text-black" />
    </div>
  );
}
