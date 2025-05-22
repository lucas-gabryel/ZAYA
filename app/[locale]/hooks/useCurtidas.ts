"use client";

import { useCurtidasContext } from "@/app/[locale]/context/CurtidasContext";

export const useCurtidas = () => {
  const { curtidas, toggleCurtida } = useCurtidasContext();

  const isCurtido = (id: string) => curtidas.includes(id);

  return { curtidas, toggleCurtida, isCurtido };
};
