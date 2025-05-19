"use client"
import { useState } from "react"

export const useFrete = () => {
  const [frete, setFrete] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const calcularFrete = async (cep: string) => {
    setLoading(true)
    setErro(null)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error("CEP inválido")
      }

      const uf = data.uf

      const tabelaFrete: Record<string, number> = {
        AL: 10,
        PE: 15,
        SE: 15,
        PB: 15,
        RN: 15,
        BA: 20,
        CE: 20,
        PI: 20,
        MA: 20
      }


      const valorFrete = tabelaFrete[uf] ?? 30
      setFrete(valorFrete)
    } catch (error) {
      if(error instanceof Error){
        setErro(`Error desconhecido: ${error.message}`)
        setFrete(null)
      }
    } finally {
      setLoading(false)
    }
  }

  return { frete, calcularFrete, loading, erro }
}
