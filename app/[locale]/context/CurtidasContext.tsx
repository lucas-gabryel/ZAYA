"use client";

import React, { createContext, useContext, useState } from "react";
import { CurtidasContextType } from "@/app/[locale]/types/types";

const CurtidasContext = createContext<CurtidasContextType | undefined>(
  undefined
);

export const CurtidasProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [curtidas, setCurtidas] = useState<string[]>([]);

  const toggleCurtida = (id: string) => {
    setCurtidas((prevCurtidas) =>
      prevCurtidas.includes(id)
        ? prevCurtidas.filter((curtidaId) => curtidaId !== id)
        : [...prevCurtidas, id]
    );
  };

  return (
    <CurtidasContext.Provider value={{ curtidas, toggleCurtida }}>
      {children}
    </CurtidasContext.Provider>
  );
};

export const useCurtidasContext = () => {
  const context = useContext(CurtidasContext);
  if (!context) {
    throw new Error(
      "useCurtidasContext deve ser usado dentro do CurtidasProvider"
    );
  }
  return context;
};
