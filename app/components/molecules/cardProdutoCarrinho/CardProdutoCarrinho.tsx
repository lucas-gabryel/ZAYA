import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { CardProdutoCarrinhoProps } from "@/app/types/types"

export default function CardProdutoCarrinho({
  nome, imagem, preco, quantidade, onAdd, onRemove, onDelete
}: CardProdutoCarrinhoProps) {
  const total = (preco * quantidade).toFixed(2);

  return (
    <div className="flex justify-between items-center gap-4 p-4 border-b">
      <Image src={imagem} alt={nome} width={80} height={80} className="rounded" />
      <div className="flex flex-col flex-1">
        <strong>{nome}</strong>
        <span className="text-sm text-gray-500">Preço: R$ {preco.toFixed(2)}</span>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={onRemove} className="px-2 border">-</button>
          <span>{quantidade}</span>
          <button onClick={onAdd} className="px-2 border">+</button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-bold">R$ {total}</span>
        <button onClick={onDelete} className="text-red-500 mt-2">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}