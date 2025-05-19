/* import React from "react";
import Logo from "../../molecules/logo/Logo";
import NavBar from "../../molecules/navbar/NavBar";
import { SearchBar } from "../../molecules/searchBar/SearchBar";
import Perfil from "../../molecules/perfil/Perfil";
import Carrinho from "../../molecules/carrinho/Carrinho";

export default function Header() {
    return (
        <header className="flex p-6 items-center justify-between bg-black">
            <Logo />
            <NavBar />
            <div className="flex gap-4 items-center">
                <SearchBar placeholder="Buscar"/>
                <Perfil />
                <Carrinho />
            </div>
        </header>
    )
} */

"use client";

import React, { useState } from "react";
import Logo from "../../molecules/logo/Logo";
import NavBar from "../../molecules/navbar/NavBar";
import { SearchBar } from "../../molecules/searchBar/SearchBar";
import Perfil from "../../molecules/perfil/Perfil";
import Carrinho from "../../molecules/carrinho/Carrinho";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-col bg-black">
            <div className="flex px-8 py-4 items-center justify-between">
                <Logo />

                {/* Ícone do menu sanduíche para mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                {/* Elementos visíveis em telas maiores */}
                <div className="hidden md:flex gap-6 items-center">
                    <NavBar />
                    <SearchBar placeholder="Buscar" />
                    <Perfil />
                    <Carrinho />
                </div>
            </div>

            {/* Menu expandido em telas menores */}
            {menuOpen && (
                <div className="flex flex-col gap-4 px-4 pb-4 md:hidden">
                    <NavBar />
                    <SearchBar placeholder="Buscar" />
                    <div className="flex gap-4">
                        <Perfil />
                        <Carrinho />
                    </div>
                </div>
            )}
        </header>
    );
}
