import type { APIRoute } from "astro";
import { llmsIndex } from "../data/agent";

// https://llmstxt.org — índice del sitio para modelos de lenguaje.
export const GET: APIRoute = () =>
  new Response(llmsIndex(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
