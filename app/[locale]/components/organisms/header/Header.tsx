"use client";

import React, { useState } from "react";
import Logo from "../../molecules/logo/Logo";
import NavBar from "../../molecules/navbar/NavBar";
import { SearchBar } from "../../molecules/searchBar/SearchBar";
import Perfil from "../../molecules/perfil/Perfil";
import Carrinho from "../../molecules/carrinho/Carrinho";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "../../molecules/languageSwitcher/LanguageSwitcher";
import TextNav from "../../molecules/textNav/TextNav";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations();

    return (
        <header className="flex flex-col bg-black">
            <div className="flex px-8 py-4 items-center justify-between">
                <Logo />

                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={t('header.label')}
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                <div className="hidden md:flex gap-6 items-center">
                    <NavBar />
                    <SearchBar placeholder={t('header.placeholder')} />
                    <LanguageSwitcher />
                    <Perfil />
                    <Carrinho />
                </div>
            </div>

            {menuOpen && (
                <div className="h-svh flex flex-col gap-4 px-8 pt-4 md:hidden">
                    <SearchBar placeholder={t('header.placeholder')} />
                    <nav className="flex justify-between items-center mt-4" onClick={() => setMenuOpen(!menuOpen)}>
                        <ul className="flex flex-col gap-4 w-full">
                            <li className="p-3 hover:border-b hover:border-white"><TextNav href="/" texto={t('textNav.home')} /></li>
                            <li className="p-3 hover:border-b hover:border-white"><TextNav href="/masculino" texto={t('textNav.masculino')} /></li>
                            <li className="p-3 hover:border-b hover:border-white"><TextNav href="/feminino" texto={t('textNav.feminino')} /></li>
                            <li className="p-3 hover:border-b hover:border-white"><TextNav href="/ofertas" texto={t('textNav.ofertas')} /></li>
                        </ul>
                    </nav>
                    <div className="flex gap-6 mt-4 align-center">
                        <LanguageSwitcher />
                        <div className="flex gap-6" onClick={() => setMenuOpen(!menuOpen)}>
                            <Perfil />
                            <Carrinho />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
