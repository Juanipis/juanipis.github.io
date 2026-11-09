import type { APIRoute } from "astro";
import { resume } from "../../data/agent";

export const GET: APIRoute = () =>
  new Response(JSON.stringify(resume("es"), null, 2), { headers: { "Content-Type": "application/json" } });
