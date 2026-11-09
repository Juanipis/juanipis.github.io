// WebMCP (borrador W3C, https://webmachinelearning.github.io/webmcp/): herramientas de solo
// lectura para que un agente de IA que visite el sitio consulte el perfil sin raspar el HTML.
// Se registra solo si el navegador expone document.modelContext (o navigator.modelContext en
// la vista previa de Chrome); en los demás no hace nada.

type Tool = {
  name: string;
  title?: string;
  description: string;
  inputSchema?: object;
  annotations?: { readOnlyHint?: boolean };
  execute: (input: Record<string, unknown>) => Promise<unknown>;
};
type ModelContext = { registerTool: (tool: Tool, options?: { signal?: AbortSignal }) => unknown };

const es = document.documentElement.lang === "es";
let cache: Promise<any> | undefined;
const resume = () => (cache ??= fetch(es ? "/es/resume.json" : "/resume.json").then((r) => r.json()));
const reply = (data: unknown) => ({
  content: [{ type: "text", text: typeof data === "string" ? data : JSON.stringify(data, null, 2) }],
});

const tools: Tool[] = [
  {
    name: "get_profile",
    title: "Juanipis: profile",
    description:
      "Who Juan Pablo Díaz Correa (Juanipis) is: title, summary, location, languages, availability for freelance work and profile links.",
    annotations: { readOnlyHint: true },
    async execute() {
      const r = await resume();
      return reply({ ...r.basics, availability: r.meta.availability, languages: r.languages, education: r.education, awards: r.awards });
    },
  },
  {
    name: "get_experience",
    title: "Juanipis: work experience",
    description: "Work history with roles, dates, summaries and highlights, plus grouped technical skills.",
    annotations: { readOnlyHint: true },
    async execute() {
      const r = await resume();
      return reply({ work: r.work, skills: r.skills });
    },
  },
  {
    name: "search_projects",
    title: "Juanipis: projects",
    description:
      "List Juanipis' projects. Optionally filter by a keyword that matches the name, description or technology (e.g. 'python', 'swift', 'ai', 'home assistant').",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Optional keyword to filter projects." } },
    },
    annotations: { readOnlyHint: true },
    async execute({ query }) {
      const r = await resume();
      const q = typeof query === "string" ? query.trim().toLowerCase() : "";
      const list = (r.projects as any[]).filter(
        (p) => !q || [p.name, p.description, ...(p.keywords ?? [])].join(" ").toLowerCase().includes(q),
      );
      return reply(list);
    },
  },
  {
    name: "get_contact",
    title: "Juanipis: how to send a proposal",
    description:
      "How to contact Juanipis about freelance work or collaborations: email and profiles. Returns information only; it never sends anything.",
    annotations: { readOnlyHint: true },
    async execute() {
      const r = await resume();
      return reply({
        email: r.basics.email,
        profiles: r.basics.profiles,
        availability: r.meta.availability,
        tip: "Write in English or Spanish with a short description of the project, timeline and budget.",
      });
    },
  },
];

export function registerWebMcpTools() {
  const mc: ModelContext | undefined =
    (document as any).modelContext ?? (navigator as any).modelContext;
  if (!mc?.registerTool) return;
  for (const tool of tools) {
    try {
      Promise.resolve(mc.registerTool(tool)).catch(() => {});
    } catch {
      // Una herramienta que falle no debe romper la página.
    }
  }
}
