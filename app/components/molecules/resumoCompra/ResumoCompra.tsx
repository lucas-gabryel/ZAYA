"use client"
import { useState } from "react"
import { useFrete } from "@/app/hooks/useFrete"

interface Props {
  subtotal: number
}

export default function ResumoCompra({ subtotal }: Props) {
  const [cep, setCep] = useState("")
  const { frete, calcularFrete, loading, erro } = useFrete()

  const total = frete !== null ? (subtotal + frete).toFixed(2) : subtotal.toFixed(2)

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Resumo da Compra</h2>

      <div className="mb-4">
        <label htmlFor="cep" className="text-sm block mb-1">CEP:</label>
        <input
          type="text"
          id="cep"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={e => setCep(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <button
          onClick={() => calcularFrete(cep)}
          className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-zinc-800 transition"
          disabled={loading}
        >
          {loading ? "Calculando..." : "Calcular frete"}
        </button>
        {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
      </div>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Frete</span>
        <span>
          {frete !== null ? `R$ ${frete.toFixed(2)}` : "--"}
        </span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>R$ {total}</span>
      </div>

      <button className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition">
        Finalizar Compra
      </button>
    </div>
  )
}