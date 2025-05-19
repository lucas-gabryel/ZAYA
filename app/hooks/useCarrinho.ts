"use client"
import { useState } from "react";
import { ProdutoCarrinho } from "@/app/types/types";

export const useCarrinho = () => {
  const [produtos, setProdutos] = useState<ProdutoCarrinho[]>([
    {
      id: "P01",
      name: "Blusa Minimal ZAYA",
      image: "/camisaMinimal.png",
      price: 119.90,
      quantidade: 1,
    },
    {
      id: "P02",
      name: "Calça Wide Leg ZAYA",
      image: "/calcaWide.png",
      price: 159.90,
      quantidade: 1,
    },
  ]);

  const aumentarQuantidade = (id: string) => {
    setProdutos(prev =>
      prev.map(p => p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p)
    );
  };

  const diminuirQuantidade = (id: string) => {
    setProdutos(prev =>
      prev.map(p => p.id === id && p.quantidade > 1 ? { ...p, quantidade: p.quantidade - 1 } : p)
    );
  };

  const removerProduto = (id: string) => {
    setProdutos(prev => prev.filter(p => p.id !== id));
  };

  const subtotal = produtos.reduce(
    (total, produto) => total + produto.price * produto.quantidade, 0
  );

  return {
    produtos,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    subtotal
  };
};