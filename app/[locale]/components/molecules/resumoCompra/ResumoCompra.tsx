"use client";
import { useState } from "react";
import { useFrete } from "@/app/[locale]/hooks/useFrete";
import { useTranslations } from 'next-intl';

interface Props {
  subtotal: number;
}

export default function ResumoCompra({ subtotal }: Props) {
  const [cep, setCep] = useState("");
  const { frete, calcularFrete, loading, erro } = useFrete();
  const t = useTranslations();

  const total =
    frete !== null ? (subtotal + frete).toFixed(2) : subtotal.toFixed(2);

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">{t('resumoCompra.title')}</h2>

      <div className="mb-4">
        <label htmlFor="cep" className="text-sm block mb-1">
          {t('resumoCompra.cep.label')}
        </label>
        <input
          type="text"
          id="cep"
          placeholder={t('resumoCompra.cep.placeholder')}
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <button
          onClick={() => calcularFrete(cep)}
          className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-zinc-800 transition"
          disabled={loading}
        >
          {loading ? t('resumoCompra.cep.btn.run') : t('resumoCompra.cep.btn.stop')}
        </button>
        {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
      </div>

      <div className="flex justify-between mb-2">
        <span>{t('resumoCompra.subtotal.span1')}</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>{t('resumoCompra.subtotal.span2')}</span>
        <span>{frete !== null ? `R$ ${frete.toFixed(2)}` : "--"}</span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>{t('resumoCompra.subtotal.span3')}</span>
        <span>R$ {total}</span>
      </div>

      <button className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition">
        {t('resumoCompra.subtotal.btn')}
      </button>
    </div>
  );
}
