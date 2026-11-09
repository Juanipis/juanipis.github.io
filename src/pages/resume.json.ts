import type { APIRoute } from "astro";
import { resume } from "../data/agent";

// JSON Resume (https://jsonresume.org/schema). También lo usan las herramientas WebMCP.
export const GET: APIRoute = () =>
  new Response(JSON.stringify(resume("en"), null, 2), { headers: { "Content-Type": "application/json" } });
