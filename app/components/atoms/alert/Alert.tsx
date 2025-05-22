"use client"

import React, { useEffect, useState } from "react";
import { Text } from "@/app/components/atoms/text/Text";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AlertProps } from "@/app/types/types";

export function Alert({ message, type = "success", duration }: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!visible) return null;

  const bgColor = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  };

  const icon = {
    success: <AiOutlineCheckCircle size={20} />,
    error: <span>❌</span>,
    warning: <span>⚠️</span>,
  };

  return (
    <div
      className={` fixed bottom-4 right-4 z-50 flex items-center gap-3 p-4 rounded-lg border shadow-lg w-[360px] ${bgColor[type]}`}
    >
      <div>{icon[type]}</div>
      <Text>{message}</Text>
      <button onClick={() => setVisible(false)} className="ml-auto text-sm underline">
        Fechar
      </button>
    </div>
  );
}