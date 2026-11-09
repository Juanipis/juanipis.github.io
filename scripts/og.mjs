// Genera las imágenes para vista previa de enlaces (Open Graph, 1200×630) en inglés y español.
// Uso: node scripts/og.mjs  → public/og-en.jpg y public/og-es.jpg
import sharp from "sharp";
import { readFileSync } from "node:fs";

const W = 1200, H = 630, PHOTO_W = 440;
const textos = {
  en: { title: "Systems and Computer Engineer", school: "EIA University · Medellín, Colombia", badge: "Open to freelance work", tags: "AI agents · SaaS backends · Power Platform" },
  es: { title: "Ingeniero de Sistemas y Computación", school: "Universidad EIA · Medellín, Colombia", badge: "Disponible para proyectos freelance", tags: "Agentes de IA · Backends SaaS · Power Platform" },
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const foto = await sharp("src/assets/cover-photo-light.webp")
  .resize(PHOTO_W, H, { fit: "cover", position: "attention" })
  .toBuffer();

for (const [lang, t] of Object.entries(textos)) {
  const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbf8f1"/><stop offset="1" stop-color="#f6e7c9"/>
    </linearGradient>
    <linearGradient id="txt" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#35506f"/><stop offset="1" stop-color="#b86a12"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="160" cy="560" r="260" fill="#35506f" opacity="0.06"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="72" y="150" font-size="30" font-weight="600" fill="#5b6170">Juanipis</text>
    <text x="72" y="222" font-size="58" font-weight="700" fill="url(#txt)">Juan Pablo Díaz Correa</text>
    <text x="72" y="290" font-size="36" font-weight="600" fill="#1f2330">${esc(t.title)}</text>
    <text x="72" y="336" font-size="27" fill="#5b6170">${esc(t.school)}</text>
    <text x="72" y="402" font-size="27" fill="#35506f">${esc(t.tags)}</text>
    <rect x="72" y="448" width="${t.badge.length * 13.2 + 76}" height="56" rx="28" fill="#ffffff" stroke="#1f2330" stroke-opacity="0.12"/>
    <circle cx="104" cy="476" r="9" fill="#10b981"/>
    <text x="126" y="486" font-size="26" font-weight="600" fill="#1f2330">${esc(t.badge)}</text>
    <text x="72" y="572" font-size="30" font-weight="700" fill="#b86a12">juanipis.xyz</text>
  </g>
</svg>`;
  const out = `public/og-${lang}.jpg`;
  const info = await sharp(Buffer.from(svg))
    .composite([{ input: foto, left: W - PHOTO_W, top: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(out);
  console.log(out, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
}
