# Proyecto Cultural Barranco

El Barranco es un espacio cultural alternativo en Mallasa, La Paz: jardín, casa, vistas, barra, fuego, música, cine, yoga, comida, conversación y comunidad.

Este repo empieza como una base pública y viva para documentar formas de habitar el espacio en *“modo Barranco”*: con libertad, confianza, cuidado y la intención de dejar el lugar igual o mejor.

## Encuentros

- [Cómo hacer tu encuentro en el Barranco](https://barranco-life.github.io/Barranco/encuentros/)

Esta primera versión no es una tarifa final ni un contrato. Es una forma de abrir conversación para encuentros, talleres, cumpleaños, comidas, cine, música, yoga u otras propuestas que resuenen con el espacio.

## Estado

v0.3 — sitio en Astro 7.3.8, en español e inglés, con tema claro y oscuro. Publicado en
<https://barranco-life.github.io/Barranco/>. El contenido se va ajustando con usos reales del espacio.

## Desarrollo

Node 22 o más nuevo.

```bash
npm ci
npm run dev       # sitio local con recarga
npm run build     # verifica que cada página tenga su par en el otro idioma y construye en dist/
npm run check     # revisión de tipos (astro check)
npm run images    # después de agregar fotos: las comprime y crea sus copias AVIF
```

Cada push a `main` construye y publica el sitio (`.github/workflows/deploy.yml`).
