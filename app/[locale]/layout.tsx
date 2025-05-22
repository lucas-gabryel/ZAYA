import React from "react";
import "./globals.css";

import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import Header from "./components/organisms/header/Header";
import Footer from "./components/organisms/footer/Footer";
import { CurtidasProvider } from "@/app/[locale]/context/CurtidasContext";

export const metadata: Metadata = {
  title: "ZAYA | Moda Essencial para Todos os Estilos",
  description:
    "Descubra a ZAYA – onde conforto e estilo se encontram. Roupas essenciais e minimalistas para quem valoriza autenticidade e elegância no dia a dia.",
  keywords:
    "ZAYA, loja de roupas, moda minimalista, streetwear elegante, roupas femininas, roupas masculinas, moda jovem, estilo essencial",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} >
          <CurtidasProvider>
            <Header />
            {children}
            <Footer />
          </CurtidasProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
