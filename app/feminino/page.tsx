import React from "react";
import { CardProduto } from "../components/molecules/cardProduto/CardProduto";
import { Title } from "../components/atoms/title/Title";
import produtosMasculinos from "@/app/data/ofertas.json"

export default function Feminino() {
  return (
    <main className="p-6">
      <section className="mb-8 text-center">
        <Title children="Moda Feminina" />
        <p className="text-zinc-600 mt-2">Confira os produtos selecionados para você</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Coluna de Filtros */}
        <aside className="md:col-span-3">
          <div className="p-4 border rounded bg-white shadow">
            <h2 className="font-semibold mb-4 text-lg">Filtros</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium">Categoria</label>
                <select className="w-full border px-2 py-1 rounded">
                  <option>Todos</option>
                  <option>Camisetas</option>
                  <option>Bermudas</option>
                  <option>Calças</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Preço</label>
                <input type="range" min={50} max={500} className="w-full" />
              </div>
            </div>
          </div>
        </aside>

        {/* Grid de Produtos */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosMasculinos.map((produto) => (
            <CardProduto
              key={produto.id}
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
