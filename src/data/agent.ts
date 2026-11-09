// Contenido para agentes de IA (llms.txt, llms-full.txt, resume.json, WebMCP).
// Todo sale de los mismos datos que las páginas: i18n/*.json y data/projects.ts.
import { getDictionary, localizePath, type Locale } from "../i18n";
import { projects } from "./projects";

export const SITE = "https://juanipis.xyz";
export const NAME = "Juan Pablo Díaz Correa";
export const EMAIL = "juan@juanipis.xyz";
export const LINKS = {
  github: "https://github.com/Juanipis",
  linkedin: "https://www.linkedin.com/in/juanipis/",
};

export const SKILLS = {
  languages: ["Python", "TypeScript", "Go", "C#", "SQL", "Swift", "Dart", "Java"],
  frameworks: ["FastAPI", "React", "Astro", "NestJS", "Next.js", "Angular", "Flutter", "Three.js"],
  ai: ["Pydantic AI", "LangChain / LangGraph", "RAG", "Embeddings + pgvector", "Azure OpenAI", "MCP", "Claude Code", "Multi-agent systems"],
  cloud: ["AWS (Lambda, S3, Aurora)", "Azure (Entra ID, Container Apps, Bicep)", "Power Platform (Code Apps, Dataverse, Custom APIs, Power Automate)", "Docker"],
  data: ["PostgreSQL", "SQLite", "MongoDB", "gRPC", "OAuth2 / OIDC", "Clean / Hexagonal Architecture", "CI/CD"],
};

/** Quita etiquetas HTML de los textos de i18n. */
export const plain = (html: string) => html.replace(/<[^>]+>/g, "");

const url = (locale: Locale, path: Parameters<typeof localizePath>[1]) => SITE + localizePath(locale, path);

export function availability(locale: Locale) {
  const t = getDictionary(locale);
  return { status: t.hire.badge, text: t.hire.text };
}

/** llms.txt: índice corto según https://llmstxt.org */
export function llmsIndex(): string {
  const t = getDictionary("en");
  return `# ${NAME} (Juanipis)

> ${t.about.title}, based in Medellín, Colombia. ${t.hire.text}

${plain(t.about.aboutText)}

- Contact: ${EMAIL} (proposals welcome, in English or Spanish)
- GitHub: ${LINKS.github}
- LinkedIn: ${LINKS.linkedin}
- Languages: Spanish (native), English (B2)
- Time zone: America/Bogota (UTC-5)

## Pages

- [Home](${url("en", "/")}): who I am and the technologies I work with
- [About me](${url("en", "/about-me/")}): experience, education, stack and awards
- [Projects](${url("en", "/projects/")}): ${projects.length} projects with descriptions and links
- [Contact](${url("en", "/contact/")}): email and profiles

## Machine-readable

- [Full profile, English](${SITE}/llms-full.txt): every page as plain text in one file
- [Full profile, Spanish](${SITE}/es/llms-full.txt): same content in Spanish
- [resume.json](${SITE}/resume.json): JSON Resume (https://jsonresume.org/schema) with work, skills and projects
- WebMCP: pages register read-only tools (get_profile, get_experience, search_projects, get_contact) through document.modelContext

## Optional

- [Spanish site](${SITE}/es/): the whole site in Spanish
- [Sitemap](${SITE}/sitemap-index.xml)
`;
}

/** llms-full.txt: todo el contenido del sitio en texto plano (Markdown). */
export function llmsFull(locale: Locale): string {
  const t = getDictionary(locale);
  const es = locale === "es";
  const exp = t.about.experiences as Array<{ role: string; period: string; company: string; companyUrl?: string; summary: string; highlights: string[] }>;
  const lines: string[] = [];
  lines.push(`# ${NAME} (Juanipis) — ${t.about.title}`, "");
  lines.push(`> ${t.hire.badge}. ${t.hire.text}`, "");
  lines.push(`${es ? "Contacto" : "Contact"}: ${EMAIL} · GitHub: ${LINKS.github} · LinkedIn: ${LINKS.linkedin}`);
  lines.push(`${es ? "Sitio" : "Website"}: ${url(locale, "/")} · ${es ? "Ubicación" : "Location"}: Medellín, Colombia (UTC-5) · ${es ? "Idiomas" : "Languages"}: ${t.about.spanish} (${t.about.native}), ${t.about.english} (B2)`, "");
  lines.push(`## ${t.about.aboutHeading}`, "", plain(t.about.aboutText), "", plain(t.home.description), "");
  lines.push(`## ${t.about.experienceHeading}`, "");
  for (const e of exp) {
    lines.push(`### ${e.role} — ${e.company} (${e.period})`, "");
    if (e.companyUrl) lines.push(e.companyUrl, "");
    lines.push(e.summary, "", ...e.highlights.map((h) => `- ${h}`), "");
  }
  lines.push(`## ${t.about.educationHeading}`, "", `- ${t.about.educationDegree}, ${t.about.educationSchool} (${t.about.educationPeriod})`, "");
  lines.push(`## ${t.about.techStackHeading}`, "");
  for (const [k, v] of Object.entries(SKILLS)) lines.push(`- ${k}: ${v.join(", ")}`);
  lines.push("", `## ${t.about.awardsHeading}`, "", ...t.about.awards.map((a) => `- ${a.title}: ${a.text}`), "");
  lines.push(`## ${t.about.softSkillsHeading}`, "", t.about.softSkills.join(", "), "");
  lines.push(`## ${t.projects.heading}`, "");
  for (const p of projects) {
    lines.push(`### ${p.title}`, "", p.description[locale], "", `- ${es ? "Tecnologías" : "Technologies"}: ${p.technologies.join(", ")}`);
    if (p.url) lines.push(`- ${es ? "Enlace" : "Link"}: ${p.url}`);
    lines.push("");
  }
  lines.push(`## ${t.contact.heading}`, "", `${t.contact.subtitle} ${EMAIL}`, "");
  return lines.join("\n");
}

/** resume.json en formato JSON Resume (https://jsonresume.org/schema). */
export function resume(locale: Locale = "en") {
  const t = getDictionary(locale);
  const exp = t.about.experiences as Array<{ role: string; period: string; company: string; companyUrl?: string; summary: string; highlights: string[] }>;
  const dates: Record<string, [string, string?]> = {
    PROCOL: ["2025-11"],
    ABACO: ["2025-08"],
    ISA: ["2025-01", "2025-07"],
    Kuenta: ["2023-06", "2024-02"],
  };
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: NAME,
      label: t.about.title,
      email: EMAIL,
      url: SITE,
      summary: `${plain(t.about.aboutText)} ${t.hire.text}`,
      location: { city: "Medellín", countryCode: "CO" },
      profiles: [
        { network: "GitHub", username: "Juanipis", url: LINKS.github },
        { network: "LinkedIn", username: "juanipis", url: LINKS.linkedin },
      ],
    },
    work: exp.map((e) => ({
      name: e.company,
      position: e.role,
      url: e.companyUrl,
      startDate: dates[e.company]?.[0],
      endDate: dates[e.company]?.[1],
      summary: e.summary,
      highlights: e.highlights,
    })),
    education: [{ institution: t.about.educationSchool, area: t.about.educationDegree, studyType: "Bachelor", startDate: "2021-01", endDate: "2025-12" }],
    awards: t.about.awards.map((a) => ({ title: a.title, summary: a.text })),
    skills: Object.entries(SKILLS).map(([name, keywords]) => ({ name, keywords })),
    languages: [
      { language: t.about.spanish, fluency: t.about.native },
      { language: t.about.english, fluency: "B2" },
    ],
    projects: projects.map((p) => ({ name: p.title, description: p.description[locale], keywords: p.technologies, url: p.url })),
    meta: {
      canonical: `${SITE}/resume.json`,
      availability: availability(locale),
      lastModified: new Date().toISOString().slice(0, 10),
    },
  };
}
