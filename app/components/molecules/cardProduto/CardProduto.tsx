"use client";

import React from "react";
import { CardProdutoProps } from "@/app/types/types";
import { Image } from "../../atoms/image/Image";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { useCurtidas } from "@/app/hooks/useCurtidas";
import { useCompartilhar } from "@/app/hooks/useCompartilhar";


export function CardProduto({ id, image, title, price }: CardProdutoProps) {
  const { isCurtido, toggleCurtida } = useCurtidas();
  const curtido = isCurtido(id);

  const { compartilhar } = useCompartilhar();

  const handleShare = () => {
    const url = `https://zaya-omega.vercel.app/produto/${id}`;
    compartilhar(url, title, "Dá uma olhada nesse produto que eu encontrei!");
  };

  return (
    <div className="rounded-lg flex flex-col shadow-sm overflow-hidden">
      <div className="relative">
        <Link href="#">
          <Image src={image} alt={title} />
        </Link>

        <div className="absolute top-2 right-2 flex gap-2 z-10">
          <button
            type="button"
            aria-label="Curtir"
            className={`${
              curtido ? "bg-red-500 text-white" : "bg-white/80"
            } hover:bg-white rounded-full p-3 shadow-md transition`}
            onClick={() => toggleCurtida(id)}
          >
            <FiHeart size={18} />
          </button>

          <button
            type="button"
            aria-label="Compartilhar"
            className="bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition"
            onClick={handleShare}
          >
            <FiShare2 size={18} />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        <Link href="#">
          <Title level={3}>{title}</Title>
          <Text>Tênis</Text>
          <div className="flex gap-1.5">
            <span className="text-zinc-500">R$ {price.replace('.', ',')}</span>
            <span className="text-zinc-500 line-through">
              R$ {(Number(price) * 1.1).toFixed(2).replace('.', ',')}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
