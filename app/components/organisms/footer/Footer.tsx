import React from "react";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <Title children="ZAYA" level={2} />
          <p className="text-sm text-zinc-400">
            Moda essencial para todos os estilos.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Navegação</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><Link href="/" children="Início" /></li>
            <li><Link href="/masculino" children="Masculino" /></li>
            <li><Link href="/feminino" children="Feminino" /></li>
            <li><Link href="/ofertas" children="Ofertas" /></li>
            <li><Link href="/carrinho" children="Carrinho" /></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Siga-nos</h3>
          <div className="flex gap-4 text-zinc-400 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} ZAYA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
