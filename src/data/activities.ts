import { href, LINKS, type Lang } from '../i18n/site';
import type { CardItem } from '../components/Cards.astro';

// One card per activity. Images are Ernesto's photos (ER Projects/Barranco/Assets, approved for
// public use 2026-09-23). Galería has no photo of the room yet, so it shows a colour block.
export function activities(lang: Lang): CardItem[] {
  const es = lang === 'es';
  return [
    {
      href: href(lang, 'musica/'), kind: es ? 'Música' : 'Music', kindClass: 'kind-music',
      title: es ? 'Música en vivo' : 'Live music',
      text: es ? 'Bandas y artistas de La Paz y de otras ciudades, del rock al jazz y la electrónica.' : 'Bands and artists from La Paz and beyond, from rock to jazz and electronic music.',
      image: 'assets/images/barranco/musica-noche-800.jpg',
      alt: es ? 'Público de espaldas frente a un concierto nocturno en el Barranco.' : 'Audience from behind at a night concert at Barranco.',
    },
    {
      href: href(lang, 'cine/'), kind: 'Cinema Barranco', kindClass: 'kind-cinema',
      title: es ? 'Cine bajo las estrellas' : 'Cinema under the stars',
      text: es ? 'Clásicos, cine de culto, animación y cine para niñas y niños, al aire libre.' : 'Classics, cult films, animation and films for children, outdoors.',
      image: 'assets/images/barranco/cine-noche-800.jpg',
      alt: es ? 'Proyección nocturna al aire libre con público.' : 'Outdoor night screening with an audience.',
    },
    {
      href: href(lang, 'yoga/'), kind: 'Yoga', kindClass: 'kind-yoga',
      title: es ? 'Yoga en la naturaleza' : 'Yoga in nature',
      text: es ? 'Prácticas para distintos niveles, al aire libre y en comunidad.' : 'Practice for different levels, outdoors and in community.',
      image: 'assets/images/barranco/yoga-patio-800.jpg',
      alt: es ? 'Clase de yoga en el patio del Barranco.' : 'Yoga class in the Barranco courtyard.',
    },
    {
      href: href(lang, 'galeria/'), kind: es ? 'Galería' : 'Gallery', kindClass: 'kind-gallery',
      title: 'Galería Barranco',
      text: es ? 'Una sala viva para artes visuales. Recibimos propuestas.' : 'A living room for visual arts. Proposals welcome.',
      art: es ? 'Galería' : 'Gallery',
    },
    {
      href: href(lang, 'encuentros/'), kind: es ? 'Encuentros' : 'Gatherings', kindClass: 'kind-gatherings',
      title: es ? 'Organiza tu encuentro' : 'Host your gathering',
      text: es ? 'Cumpleaños, comidas, talleres o una idea que todavía no tiene nombre.' : 'Birthdays, meals, workshops or an idea that has no name yet.',
      image: 'assets/images/barranco/encuentro-mesa-800.jpg',
      alt: es ? 'Grupo reunido en una mesa del patio al atardecer.' : 'A group at a courtyard table at sunset.',
    },
    {
      href: href(lang, 'hospedate/'), kind: es ? 'Hospédate' : 'Stay',
      title: es ? 'Quédate en el Barranco' : 'Stay at Barranco',
      text: es ? 'Alojamiento dentro del proyecto cultural, junto al Valle de la Luna.' : 'A stay inside the cultural project, next to the Valle de la Luna.',
      image: 'assets/images/barranco/jardin-casita-800.jpg',
      alt: es ? 'El jardín del Barranco junto a la casita blanca.' : 'The Barranco garden next to the small white house.',
    },
  ];
}

// Extra cards shown only on the Actividades page.
export function moreActivities(lang: Lang): CardItem[] {
  const es = lang === 'es';
  return [
    {
      href: href(lang, 'convocatorias/#talleres'), kind: es ? 'Talleres' : 'Workshops',
      title: es ? 'Talleres y clases' : 'Workshops and classes',
      text: es ? 'Talleres para grandes y chicos. ¿Quieres dar uno? Así funciona.' : 'Workshops for all ages. Want to teach one? Here is how.',
      image: 'assets/images/barranco/taller-mesa-800.jpg',
      alt: es ? 'Manos trabajando en un taller en la mesa larga del jardín.' : 'Hands at work in a workshop on the long garden table.',
    },
    {
      href: 'https://www.instagram.com/feria.barranco/', kind: es ? 'Ferias' : 'Markets', external: true,
      title: es ? 'Ferias' : 'Markets',
      text: es ? 'Ferias de productores y artistas. Fechas en @feria.barranco.' : 'Makers’ and artists’ markets. Dates on @feria.barranco.',
      image: 'assets/images/barranco/feria-800.jpg',
      alt: es ? 'Evento de día bajo el parrillero, con papel picado y público en el pasto.' : 'A daytime event under the tiled-roof stage, with bunting and people on the grass.',
    },
    {
      href: LINKS.voluntariado, kind: es ? 'Voluntariado' : 'Volunteering', external: true,
      title: es ? 'Cuida el lugar con nosotros' : 'Care for the place with us',
      text: es ? 'Voluntariado Barranco tiene su propio sitio.' : 'Voluntariado Barranco has its own site.',
      image: 'assets/images/barranco/perros-800.jpg',
      alt: es ? 'Personas con sus perros en el jardín del Barranco.' : 'People with their dogs in the Barranco garden.',
    },
  ];
}
