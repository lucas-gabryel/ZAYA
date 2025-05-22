import React from "react";
import { CardProduto } from "../components/molecules/cardProduto/CardProduto";
import { Title } from "../components/atoms/title/Title";
import { useTranslations } from 'next-intl';
import { useOfertas } from '@/app/[locale]/hooks/useOfertas';

export default function Masculino() {
  const ofertas = useOfertas();
  const t = useTranslations();

  return (
    <main className="p-6">
      <section className="mb-8 text-center">
        <Title>{t('masculino.title')}</Title>
        <p className="text-zinc-600 mt-2">
          {t('masculino.text')}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <aside className="md:col-span-3">
          <div className="p-4 border rounded bg-white shadow">
            <h2 className="font-semibold mb-4 text-lg">{t('masculino.filter.title')}</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium">{t('masculino.filter.categoria.label')}</label>
                <select className="w-full border px-2 py-1 rounded">
                  <option>{t('masculino.filter.categoria.op1')}</option>
                  <option>{t('masculino.filter.categoria.op2')}</option>
                  <option>{t('masculino.filter.categoria.op3')}</option>
                  <option>{t('masculino.filter.categoria.op4')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">{t('masculino.filter.price.label')}</label>
                <input type="range" min={50} max={500} className="w-full" />
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ofertas.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.name}
              price={produto.price}
              image={produto.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
