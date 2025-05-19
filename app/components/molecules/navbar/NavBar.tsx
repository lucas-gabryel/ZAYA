import React from "react";
import TextNav from "../textNav/TextNav";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center ">
        <ul className="flex gap-4">
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/" texto="Home" /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/masculino" texto="Masculino" /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/feminino" texto="Feminino" /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/ofertas" texto="Ofertas" /></li>
        </ul>
      </nav>
    </>
  );
}
