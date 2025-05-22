import React from "react";
import TextNav from "../textNav/TextNav";
import { useTranslations } from 'next-intl';

export default function NavBar() {
  const t = useTranslations();

  return (
    <>
      <nav className="flex justify-between items-center ">
        <ul className="flex gap-4">
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/" texto={t('textNav.home')} /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/masculino" texto={t('textNav.masculino')} /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/feminino" texto={t('textNav.feminino')} /></li>
          <li className="p-3 hover:border-b hover:border-white"><TextNav href="/ofertas" texto={t('textNav.ofertas')} /></li>
        </ul>
      </nav>
    </>
  );
}
