import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NavBar() {
  const t = useTranslations();

  return (
    <>
      <nav className="flex justify-between items-center ">
        <ul className="flex gap-4">
          <li className="p-3 hover:border-b hover:border-white">
            <Link href="/" className="text-white">
              {t("textNav.home")}
            </Link>
          </li>
          <li className="p-3 hover:border-b hover:border-white">
            <Link href="/sobre" className="text-white">
              {t("textNav.sobre")}
            </Link>
          </li>
          <li className="p-3 hover:border-b hover:border-white">
            <Link href="/masculino" className="text-white">
              {t("textNav.masculino")}
            </Link>
          </li>
          <li className="p-3 hover:border-b hover:border-white">
            <Link href="/feminino" className="text-white">
              {t("textNav.feminino")}
            </Link>
          </li>
          <li className="p-3 hover:border-b hover:border-white">
            <Link href="/ofertas" className="text-white">
              {t("textNav.ofertas")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
