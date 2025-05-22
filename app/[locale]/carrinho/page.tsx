"use client";
import { useCarrinho } from "@/app/[locale]/hooks/useCarrinho";
import CardProdutoCarrinho from "../components/molecules/cardProdutoCarrinho/CardProdutoCarrinho";
import ResumoCompra from "../components/molecules/resumoCompra/ResumoCompra";
import { useTranslations } from 'next-intl';

export default function CarrinhoPage() {
  const t = useTranslations();

  const {
    produtos,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    subtotal,
  } = useCarrinho();

  return (
    <main className="min-h-screen p-6 bg-white flex flex-col lg:flex-row gap-8">
      <section className="flex-1">
        <h1 className="text-2xl font-bold mb-6">{t('carrinho.title')}</h1>
        {produtos.length === 0 ? (
          <p className="text-gray-500">{t('carrinho.text')}</p>
        ) : (
          produtos.map((produto) => (
            <CardProdutoCarrinho
              key={produto.id}
              id={produto.id}
              nome={produto.name}
              imagem={produto.image}
              preco={produto.price}
              quantidade={produto.quantidade}
              onAdd={() => aumentarQuantidade(produto.id)}
              onRemove={() => diminuirQuantidade(produto.id)}
              onDelete={() => removerProduto(produto.id)}
            />
          ))
        )}
      </section>

      {produtos.length > 0 && (
        <aside className="w-full lg:w-1/3">
          <ResumoCompra subtotal={subtotal} />
        </aside>
      )}
    </main>
  );
}
