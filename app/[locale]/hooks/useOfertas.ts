import { useLocale } from 'next-intl';
import ptOfertas from '@/app/[locale]/data/ofertas-pt.json';
import enOfertas from '@/app/[locale]/data/ofertas-en.json';
import esOfertas from '@/app/[locale]/data/ofertas-es.json';

export function useOfertas() {
  const locale = useLocale();

  switch (locale) {
    case 'en':
      return enOfertas;
    case 'es':
      return esOfertas;
    case 'pt':
    default:
      return ptOfertas;
  }
}
