import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n";

import quake from "../assets/projects/quake_alert_listener.webp";
import pdfgen from "../assets/projects/pdfgen.webp";
import motobuds from "../assets/projects/motobuds.webp";
import wiimote from "../assets/projects/wiimote.webp";
import despecho from "../assets/projects/despecho.webp";
import claudeHistory from "../assets/projects/claude_history.webp";
import fanctl from "../assets/projects/fanctl.webp";
import stardewEchoes from "../assets/projects/stardew_echoes.webp";
import recetario from "../assets/projects/recetario_botw.webp";
import deadcells from "../assets/projects/deadcells_sync.webp";
import agyPlugin from "../assets/projects/agy_plugin.webp";
import visionDefect from "../assets/projects/vision_defect.webp";
import datatrip from "../assets/projects/datatrip.webp";
import danceClub from "../assets/projects/dance_club.webp";
import miyuki from "../assets/projects/miyuki.webp";
import miyukiBackend from "../assets/projects/miyuki_backend.webp";
import pokemon from "../assets/projects/pokemon.webp";
import tiendaOnline from "../assets/projects/tienda_online.webp";
import aprendiot from "../assets/projects/aprendiot.webp";
import dwalle from "../assets/projects/dwalle.webp";
import rekognition from "../assets/projects/rekognition.webp";
import personalWebpage from "../assets/projects/personal_webpage.webp";
import apptibiograma from "../assets/projects/apptibiograma.webp";
import miContratista from "../assets/projects/mi_contratista.webp";
import asesinatos from "../assets/projects/asesinatos.webp";
import huffman from "../assets/projects/huffman.webp";
import polifasico from "../assets/projects/polifasico.webp";
import personality from "../assets/projects/personality_insight.webp";
import pychat from "../assets/projects/pychat.webp";
import quimera from "../assets/projects/quimera_eyes.webp";

/** Nombre de un ícono de src/icons (sin .svg). */
export type Tech =
  | "python" | "flutter" | "powerautomate" | "firebase" | "nextjs" | "nestjs"
  | "postgresql" | "mongodb" | "docker" | "html" | "javascript" | "openai"
  | "linux" | "fastapi" | "aws" | "typescript" | "java" | "springboot"
  | "ibmcloud" | "raspberrypi" | "swift" | "dotnet" | "sqlite" | "homeassistant"
  | "electron" | "vite" | "react";

export interface Project {
  title: string;
  description: Record<Locale, string>;
  /** Ilustración (16:9). Sin imagen se muestra una tarjeta con el ícono de la primera tecnología. */
  image?: ImageMetadata;
  technologies: Tech[];
  /** Sin URL la tarjeta no muestra el enlace "Ver". */
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Quake Alert Listener",
    description: {
      en: "Earthquake warnings for Home Assistant in one dependency-free Python file: merges official early warnings, Google's Android alerts, USGS, EMSC, SGC and your own seismometer, and estimates the shaking and seconds until the S-wave.",
      es: "Alertas sísmicas para Home Assistant en un solo archivo Python sin dependencias: une alertas tempranas oficiales, las alertas de Android de Google, USGS, EMSC, SGC y tu propio sismómetro, y estima el sacudón y los segundos hasta la onda S.",
    },
    image: quake,
    technologies: ["python", "homeassistant", "raspberrypi", "docker"],
    url: "https://github.com/Juanipis/quake-alert-listener",
  },
  {
    title: "Claude History Dashboard",
    description: {
      en: "Local dashboard and MCP server for your Claude Code history: KPIs, tokens, estimated cost, live sessions, search and a durable SQLite backup.",
      es: "Panel local y servidor MCP para tu historial de Claude Code: KPIs, tokens, costo estimado, sesiones en vivo, búsqueda y respaldo duradero en SQLite.",
    },
    image: claudeHistory,
    technologies: ["python", "sqlite", "javascript"],
    url: "https://github.com/Juanipis/claude-code-history-dashboard",
  },
  {
    title: "pdfgen-juanipis",
    description: {
      en: "Python library on PyPI that turns editable HTML into paginated PDF and Word with CSS Paged Media: letterhead templates, footnotes and smart page breaks.",
      es: "Librería de Python en PyPI que convierte HTML editable en PDF paginado y Word con CSS Paged Media: plantillas de membrete, notas al pie y saltos de página inteligentes.",
    },
    image: pdfgen,
    technologies: ["python", "html"],
    url: "https://github.com/Juanipis/pdfgen-juanipis",
  },
  {
    title: "FanCtl",
    description: {
      en: "Native macOS fan controller for Apple Silicon: talks to the SMC through IOKit, with smart cooling modes, live charts and a thermal watchdog.",
      es: "Controlador de ventiladores nativo para Mac con Apple Silicon: habla con el SMC por IOKit, con modos de enfriamiento, gráficas en vivo y un vigilante térmico.",
    },
    image: fanctl,
    technologies: ["swift"],
    url: "https://github.com/Juanipis/fanctl",
  },
  {
    title: "MotoBuds for Mac",
    description: {
      en: "Native macOS companion app for Motorola Moto Buds: ANC modes, battery, in-ear detection and find-buds, reverse-engineered from the official Android app.",
      es: "App nativa de macOS para los Motorola Moto Buds: modos ANC, batería, detección en el oído y buscar audífonos, con ingeniería inversa de la app oficial de Android.",
    },
    image: motobuds,
    technologies: ["swift"],
    url: "https://github.com/Juanipis/motobuds",
  },
  {
    title: "StardewEchoes",
    description: {
      en: "Stardew Valley mod that gives NPCs persistent memory (embeddings + pgvector) and dynamic dialogue from several LLMs through a FastAPI server.",
      es: "Mod de Stardew Valley que da a los NPC memoria persistente (embeddings + pgvector) y diálogos dinámicos con varios LLM a través de un servidor FastAPI.",
    },
    image: stardewEchoes,
    technologies: ["dotnet", "python", "fastapi", "postgresql", "openai"],
    url: "https://github.com/Juanipis/llm_stardew_valley",
  },
  {
    title: "Recetario BotW",
    description: {
      en: "Unofficial desktop app that reads your Breath of the Wild save and shows what you can cook with what you carry, with every recipe and effect.",
      es: "App de escritorio no oficial que lee tu partida de Breath of the Wild y te muestra qué puedes cocinar con lo que llevas, con todas las recetas y efectos.",
    },
    image: recetario,
    technologies: ["electron", "javascript", "python"],
    url: "https://github.com/Juanipis/recetario-botw",
  },
  {
    title: "Dead Cells Save Sync",
    description: {
      en: "Moves Dead Cells progress from the Netflix mobile build to Steam, with the save format documented byte by byte.",
      es: "Pasa el progreso de Dead Cells de la versión móvil de Netflix a Steam, con el formato de partida documentado byte a byte.",
    },
    image: deadcells,
    technologies: ["python"],
    url: "https://github.com/Juanipis/deadcells-save-sync",
  },
  {
    title: "Wiimote Manager Pro",
    description: {
      en: "Use Wii Remotes as Xbox 360 controllers on Windows: per-game profiles, tilt-to-steer motion controls and up to four controllers.",
      es: "Usa los controles de Wii como controles de Xbox 360 en Windows: perfiles por juego, dirección por inclinación y hasta cuatro controles.",
    },
    image: wiimote,
    technologies: ["dotnet"],
    url: "https://github.com/Juanipis/WiimoteManagerPro",
  },
  {
    title: "Agy Plugin for Claude Code",
    description: {
      en: "Claude Code plugin that delegates reviews, adversarial reviews and background tasks to Google's Antigravity CLI.",
      es: "Plugin de Claude Code que delega revisiones, revisiones adversarias y tareas en segundo plano al CLI de Antigravity de Google.",
    },
    image: agyPlugin,
    technologies: ["javascript"],
    url: "https://github.com/Juanipis/agy-plugin-cc",
  },
  {
    title: "Universal Genealogy of Despecho",
    description: {
      en: "An irreverent family tree of heartbreak songs with Darío Gómez at its center: explore cantina, salsa, pop and emo as a mythological genealogy.",
      es: "Un árbol genealógico irreverente de las canciones de despecho con Darío Gómez en el centro: explora cantina, salsa, pop y emo como una genealogía mitológica.",
    },
    image: despecho,
    technologies: ["react", "typescript", "vite"],
    url: "https://juanipis.xyz/Universal-Genealogy-of-Despecho/",
  },
  {
    title: "Vision Defect Detection",
    description: {
      en: "Computer vision that classifies metal hardware parts as good or defective from a single frame, with explainable geometric metrics.",
      es: "Visión por computador que clasifica piezas de herrería como buenas o defectuosas a partir de un solo frame, con métricas geométricas explicables.",
    },
    image: visionDefect,
    technologies: ["python"],
    url: "https://github.com/Juanipis/vision_defect_detection",
  },
  {
    title: "DataTrip",
    description: {
      en: "Desktop app for Survey123 data: extracts georeferenced photos, transcribes voice notes with AI, and generates Excel reports.",
      es: "App de escritorio para datos de Survey123: extrae fotos georreferenciadas, transcribe notas de voz con IA y genera reportes en Excel.",
    },
    image: datatrip,
    technologies: ["python", "flutter", "powerautomate"],
  },
  {
    title: "Dance Club Comuna 8",
    description: {
      en: "A web app for a dance club in Medellin.",
      es: "Una app web para un club de baile de Medellín.",
    },
    image: danceClub,
    technologies: ["flutter", "firebase"],
    url: "https://github.com/Juanipis/dance_club_comuna_8",
  },
  {
    title: "Miyuki Webpage",
    description: {
      en: "An online store for a miyuki products brand.",
      es: "Tienda en línea para una marca de productos miyuki.",
    },
    image: miyuki,
    technologies: ["nextjs"],
    url: "https://github.com/pablomesa08/miyuki-webpage",
  },
  {
    title: "Miyuki Backend",
    description: {
      en: "A backend for an online miyuki products brand.",
      es: "Backend para la tienda en línea de una marca de productos miyuki.",
    },
    image: miyukiBackend,
    technologies: ["nestjs", "postgresql"],
    url: "https://github.com/pablomesa08/backend-miyuki",
  },
  {
    title: "Who's that Pokemon?",
    description: {
      en: "Guess the Pokemon by its silhouette.",
      es: "Adivina el Pokémon por su silueta.",
    },
    image: pokemon,
    technologies: ["flutter"],
    url: "https://github.com/Juanipis/pokemon_game",
  },
  {
    title: "Backend for an Online Store",
    description: {
      en: "Necessary backend for an online store.",
      es: "El backend que necesita una tienda en línea.",
    },
    image: tiendaOnline,
    technologies: ["python", "postgresql", "mongodb", "docker"],
    url: "https://github.com/Juanipis/backend_tienda_online",
  },
  {
    title: "AprendIoT",
    description: {
      en: "Educational website about IoT. It was an engineering project at EIA.",
      es: "Sitio educativo sobre IoT. Fue un proyecto de ingeniería en la EIA.",
    },
    image: aprendiot,
    technologies: ["html", "javascript", "firebase"],
    url: "https://github.com/Juanipis/AprendIoT",
  },
  {
    title: "Dwalle",
    description: {
      en: "Bot connected to GPT-3.5 to chat about products of an online store.",
      es: "Bot conectado a GPT-3.5 para conversar sobre los productos de una tienda en línea.",
    },
    image: dwalle,
    technologies: ["python", "docker", "openai", "linux"],
    url: "https://github.com/alejop153/DWALLE",
  },
  {
    title: "Harry Potter Recognition",
    description: {
      en: "Select a Harry Potter character, upload an image and if it matches, save it.",
      es: "Elige un personaje de Harry Potter, sube una imagen y, si coincide, se guarda.",
    },
    image: rekognition,
    technologies: ["python", "fastapi", "docker", "aws", "flutter"],
    url: "https://github.com/Juanipis/api-consulta-flutter-impltgr",
  },
  {
    title: "Personal Website",
    description: {
      en: "This website: static, bilingual and built with Astro.",
      es: "Este sitio: estático, bilingüe y hecho con Astro.",
    },
    image: personalWebpage,
    technologies: ["typescript", "html"],
    url: "https://github.com/Juanipis/juanipis.github.io",
  },
  {
    title: "Apptibiogram Clone",
    description: {
      en: "Clone of the Apptibiogram app for analyzing antibiograms.",
      es: "Clon de la app Apptibiogram para analizar antibiogramas.",
    },
    image: apptibiograma,
    technologies: ["flutter", "java", "springboot", "postgresql"],
    url: "https://github.com/Juanipis/proyecto_medico",
  },
  {
    title: "Mi Contratista CLI",
    description: {
      en: "CLI to manage a contractor's tasks.",
      es: "CLI para gestionar las tareas de un contratista.",
    },
    image: miContratista,
    technologies: ["python"],
    url: "https://github.com/Juanipis/mi_contratista_cli?tab=readme-ov-file#mi-contratista-cli",
  },
  {
    title: "Murder REST API",
    description: {
      en: "REST API to consult a PostgreSQL database.",
      es: "API REST para consultar una base de datos PostgreSQL.",
    },
    image: asesinatos,
    technologies: ["java", "springboot", "postgresql"],
    url: "https://github.com/Juanipis/asesinatos-springboot",
  },
  {
    title: "Huffman Encoder",
    description: {
      en: "Huffman encoder in Java to compress and decompress texts.",
      es: "Codificador Huffman en Java para comprimir y descomprimir textos.",
    },
    image: huffman,
    technologies: ["java"],
    url: "https://github.com/Juanipis/Huffman",
  },
  {
    title: "Polyphasic Sorting",
    description: {
      en: "Polyphasic sorting method in Java.",
      es: "Método de ordenamiento polifásico en Java.",
    },
    image: polifasico,
    technologies: ["java"],
    url: "https://github.com/Enano2001/Polifasico",
  },
  {
    title: "IBM Personality Analysis",
    description: {
      en: "Personality analysis with IBM Personality Insights.",
      es: "Análisis de personalidad con IBM Personality Insights.",
    },
    image: personality,
    technologies: ["python", "ibmcloud"],
    url: "https://github.com/Juanipis/Analisis-de-personalidad",
  },
  {
    title: "Pychat",
    description: {
      en: "Chat in Python using sockets.",
      es: "Chat en Python con sockets.",
    },
    image: pychat,
    technologies: ["python"],
    url: "https://github.com/Juanipis/Pychat",
  },
  {
    title: "Quimera Eyes",
    description: {
      en: "Block programming based on USB devices for visually impaired people.",
      es: "Programación por bloques con dispositivos USB para personas con discapacidad visual.",
    },
    image: quimera,
    technologies: ["python", "linux", "raspberrypi"],
    url: "https://github.com/Juanipis/QuimeraEyes",
  },
];
