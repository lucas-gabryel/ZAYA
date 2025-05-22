"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BiGlobe } from "react-icons/bi";
import  Button  from "@/app/[locale]/components/atoms/button/Button";
import { Text } from "@/app/[locale]/components/atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";

const languages = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onClick={() => setIsOpen((prev) => !prev)}>
      <Button
        variant="outline"
        aria-label="Trocar idioma"
        className="flex"
      >
        <Icon icon={BiGlobe} size={24} className="text-white/80" />
      </Button>

      {isOpen && (
        <ul
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 mt-4 w-32 bg-white border-zinc-200 rounded shadow-md"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <Button
                variant="outline"
                onClick={() => handleChange(lang.code)}
                className="w-full text-left px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                <Text color="hover:text-white">{lang.label}</Text>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}