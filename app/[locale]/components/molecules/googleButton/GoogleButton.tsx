"use client";

import { FcGoogle } from "react-icons/fc";
import { useTranslations } from 'next-intl';

interface BotaoGoogleProps {
  onClick: () => void;
  loading?: boolean;
}

export default function BotaoGoogle({ onClick, loading = false }: BotaoGoogleProps) {
  const t = useTranslations();

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center justify-center gap-3 border border-zinc-300 rounded px-4 py-2 w-full hover:bg-zinc-100 transition disabled:opacity-50"
    >
      <FcGoogle size={20} />
      <span>{loading ? `${t('btnGoogle.run')}` : `${t('btnGoogle.stop')}`}</span>
    </button>
  );
}
