import React from "react";
import TextNav from "../textNav/TextNav";
import Logo from "../logo/Logo";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-8 bg-neutral-950">
        <Logo />
        <ul className="flex gap-4">
          <TextNav href="/" texto="Home" />
          <li></li>
          <li>
            <TextNav href="/masculino" texto="Masculino" />
          </li>
          <li>
            <TextNav href="/feminino" texto="Feminino" />
          </li>
          <li>
            <TextNav href="/ofertas" texto="Ofertas" />
          </li>
          <li>
            <TextNav href="/carrinho" texto="Carrinho" />
          </li>
        </ul>
      </nav>
    </>
  );
}
