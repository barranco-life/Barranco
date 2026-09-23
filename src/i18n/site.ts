// Shared site data and UI strings. Values mirror the Barranco LC §20 in ER
// (Projects/Barranco/LC/UsoCuidadoYConvivencia.md); change them there first.

export type Lang = 'es' | 'en';

export const WA = {
  // Who answers what (LC §20, confirmed 2026-09-23).
  ernesto: '59172041572', // Encuentros, Galería, Propón algo
  mj: '59163153513', // general info and visits, Cinema, bar, Hospédate
};

export function wa(who: keyof typeof WA, text: string): string {
  return `https://wa.me/${WA[who]}?text=${encodeURIComponent(text)}`;
}

export const LINKS = {
  map: 'https://goo.gl/maps/iWB6R5HZnREL7ALKA',
  instagram: 'https://www.instagram.com/barranco.life/',
  cinemaInstagram: 'https://www.instagram.com/cinema.barranco/',
  facebook: 'https://www.facebook.com/barranco.life',
  tiktok: 'https://www.tiktok.com/@barranco.life',
  twitch: 'https://www.twitch.tv/barranco_life',
  tripadvisor:
    'https://www.tripadvisor.es/Attraction_Review-g294072-d24052080-Reviews-Proyecto_Cultural_Barranco-La_Paz_La_Paz_Department.html',
  airbnb: 'https://www.airbnb.com.bo/h/mallasabarranco',
  voluntariado: 'https://voluntariado.barranco.life/',
  formTalleres: 'https://forms.gle/eMgoKJgSnFVsjr868',
  formEquipo: 'https://forms.gle/PgnyeMacPtkxvoWx9',
};

export const EMAIL: Record<Lang, string> = {
  es: 'contacto@barranco.life',
  en: 'contact@barranco.life',
};

// Routes are shared between languages: /x/ in Spanish, /en/x/ in English.
export const NAV: { path: string; label: Record<Lang, string> }[] = [
  { path: 'visitanos/', label: { es: 'Visítanos', en: 'Visit' } },
  { path: 'actividades/', label: { es: 'Actividades', en: 'What’s on' } },
  { path: 'encuentros/', label: { es: 'Encuentros', en: 'Gatherings' } },
  { path: 'hospedate/', label: { es: 'Hospédate', en: 'Stay' } },
  { path: 'convocatorias/', label: { es: 'Propón algo', en: 'Propose' } },
];

export const UI = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    theme: 'Cambiar entre tema claro y oscuro',
    langSwitch: 'English',
    langSwitchLabel: 'Read this page in English',
    tagline: 'Proyecto Cultural Barranco · Mallasa, La Paz · desde diciembre de 2020',
    address: 'Calle Las Tunas 224, entre calles 3 y 4, Mallasa, La Paz',
    map: 'Mapa',
    whatsapp: 'WhatsApp',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    theme: 'Switch between light and dark theme',
    langSwitch: 'Español',
    langSwitchLabel: 'Leer esta página en español',
    tagline: 'Barranco Cultural Project · Mallasa, La Paz · since December 2020',
    address: 'Calle Las Tunas 224, between streets 3 and 4, Mallasa, La Paz',
    map: 'Map',
    whatsapp: 'WhatsApp',
  },
} as const;

/** Prefix a site path with the base (and /en/ for English). */
export function href(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${lang === 'en' ? 'en/' : ''}${path}`;
}

/** Path to a file in public/, with the base. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}
