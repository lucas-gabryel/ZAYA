import React from "react";
import { Title } from "./components/atoms/title/Title";
import { Text } from "./components/atoms/text/Text";
import { Image } from "./components/atoms/image/Image";
import { CardProduto } from "./components/molecules/cardProduto/CardProduto";
import { Link } from "./components/atoms/link/Link";
import produtos from "@/app/data/ofertas.json"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 gap-6">
        <div className="flex flex-col max-w-lg">
          <Title children="Nova coleção disponível" />
          <Text children="Explore nossos produtos exclusivos com descontos especiais." />
          <Link children="Ver produtos" href="/produtos" className="px-4 py-3 bg-black text-white rounded mt-4 w-fit hover:opacity-80" />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/hero.webp"
            alt="Imagem destaque"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="px-6 py-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {produtos.map((produto) => (
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
