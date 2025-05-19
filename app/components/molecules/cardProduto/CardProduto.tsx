/* import React from "react";
import { CardProdutoProps } from "@/app/types/types";
import { Image } from "../../atoms/image/Image";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";

export function CardProduto({ image, title, price }: CardProdutoProps) {
  return (
    <Link href="#" className="rounded-lg flex flex-col shadow-sm overflow-hidden">
      <Image src={image} alt={title} />
      <div className="px-4 py-8">
        <Title level={3}>{title}</Title>
        <Text>Tênis</Text>
        <div className="flex gap-1.5">
            <span className="text-zinc-500">R$ {price.replace('.', ',')}</span>
            <span className="text-zinc-500 line-through">R$ {(Number(price) * 1.1).toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </Link>
  );
}
 */

import React from "react";
import { CardProdutoProps } from "@/app/types/types";
import { Image } from "../../atoms/image/Image";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { FiHeart, FiShare2 } from "react-icons/fi"; // react-icons já instalados

export function CardProduto({ image, title, price }: CardProdutoProps) {
  return (
    <Link href="#" className="rounded-lg flex flex-col shadow-sm overflow-hidden">
      <div className="relative">
        <Image src={image} alt={title} />

        <div className="absolute top-2 right-2 flex gap-2">
          <button
            aria-label="Curtir"
            className="bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition"
          >
            <FiHeart size={18} />
          </button>
          <button
            aria-label="Compartilhar"
            className="bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition"
          >
            <FiShare2 size={18} />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        <Title level={3}>{title}</Title>
        <Text>Tênis</Text>
        <div className="flex gap-1.5">
          <span className="text-zinc-500">R$ {price.replace('.', ',')}</span>
          <span className="text-zinc-500 line-through">
            R$ {(Number(price) * 1.1).toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </Link>
  );
}
