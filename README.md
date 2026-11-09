# juanipis.xyz

Sitio personal de Juan Pablo Díaz Correa (Juanipis): inicio, sobre mí, proyectos y contacto, en inglés (`/`) y español (`/es/`), con modo claro (montaña, azul) y oscuro (araña, carmesí).

Es **100 % estático**: [Astro](https://astro.build) genera HTML plano en `dist/` y **GitHub Pages** lo sirve en **https://juanipis.xyz** (dominio en Cloudflare). Sin Vercel ni servidor.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
```

Requiere Node ≥ 22.23.4 (Astro 7).

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| Textos (en/es), experiencia, habilidades | `src/i18n/en.json`, `src/i18n/es.json` |
| Proyectos (título, descripción en/es, imagen, tecnologías, enlace) | `src/data/projects.ts` + imagen en `src/assets/projects/` |
| Íconos de tecnologías | `src/icons/*.svg` (`fill="currentColor"`) |
| Colores de los temas | `src/styles/global.css` (`:root` y `[data-theme="dark"]`) |
| Páginas | `src/views/*.astro` (las rutas de `src/pages/` solo eligen el idioma) |
| Imagen para compartir enlaces (1200×630, en/es) | `npm run og` → `public/og-en.jpg`, `public/og-es.jpg` (textos en `scripts/og.mjs`) |

Las imágenes de `src/assets/` se optimizan solas al compilar (WebP, varios tamaños).

## Publicación

Cada push a `main` compila y publica en GitHub Pages con `.github/workflows/deploy.yml`.

## Historia

Este repo une los dos sitios anteriores, con su historial:

- el primer sitio hecho a mano en HTML/CSS/JS (2021–2022, ramas `main` y `mejoras_visuales`);
- `juanipis-website`, la versión Next.js + Radix que estaba en Vercel, cuyo diseño se migró aquí a Astro.
