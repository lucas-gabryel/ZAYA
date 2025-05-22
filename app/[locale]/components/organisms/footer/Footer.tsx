import React from "react";
import { Link } from "@/i18n/navigation";
import { Title } from "../../atoms/title/Title";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-zinc-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <Title level={2}>ZAYA</Title>
          <p className="text-sm text-zinc-400">
            {t('footer.text')}
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">{t('footer.nav.title')}</h3>
          <ul className="space-y-2 text-zinc-400">
            <li><Link href="/">{t('textNav.home')}</Link></li>
            <li><Link href="/masculino">{t('textNav.masculino')}</Link></li>
            <li><Link href="/feminino">{t('textNav.feminino')}</Link></li>
            <li><Link href="/ofertas">{t('textNav.ofertas')}</Link></li>
            <li><Link href="/carrinho">{t('textNav.carrinho')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">{t('footer.share.title')}</h3>
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
        © {new Date().getFullYear()} ZAYA. {t('footer.direitos')}
      </div>
    </footer>
  );
}
