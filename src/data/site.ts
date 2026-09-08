export const navItems = [
  { id: "vision", label: "01 — Visión" },
  { id: "ecosistema", label: "02 — Ecosistema" },
  { id: "web", label: "03 — Web" },
  { id: "contenido", label: "04 — Contenido" },
  { id: "performance", label: "05 — Performance" },
  { id: "inversion", label: "06 — Inversión" },
  { id: "proximo-paso", label: "07 — Próximo paso" },
] as const;

export const pillars = [
  {
    title: "Sitio web",
    description:
      "El centro de información, presentación y captación de oportunidades.",
  },
  {
    title: "Catálogo inmobiliario",
    description:
      "Una plataforma ordenada para propiedades, lotes y proyectos con navegación clara.",
  },
  {
    title: "Redes sociales",
    description:
      "Contenido pensado para reforzar marca, despertar interés y sostener la conversación.",
  },
  {
    title: "Performance",
    description:
      "Publicidad, medición y optimización para convertir atención en consultas reales.",
  },
] as const;

export const sections = [
  { title: "Web institucional", years: ["Inicio", "Quiénes somos", "Clientes", "Lotes", "Fracciones", "Galería", "Contacto"] },
  { title: "Plataforma digital comercial", years: ["Propiedades", "Proyectos", "Venta", "Alquiler", "Lotes", "Fraccionamientos", "Nosotros", "Trayectoria", "Noticias", "Contacto", "Búsqueda", "Filtros", "WhatsApp", "Formularios", "Analytics", "SEO", "Conversión"] },
] as const;

export const contentCategories = [
  "Marca",
  "Propiedad",
  "Educación",
  "Confianza",
  "Conversión",
] as const;

export const growthSteps = [
  "Reconocimiento",
  "Tráfico",
  "Leads",
  "Remarketing",
] as const;

export const socialFormats = [
  { label: "12", detail: "Publicaciones" },
  { label: "4", detail: "Reels" },
  { label: "12–16", detail: "Stories" },
] as const;

export const investmentTiers = [
  {
    title: "Desarrollo web",
    price: "Gs. 12.500.000",
    text: "Diseño, UX, desarrollo responsive, catálogo inmobiliario, formularios, WhatsApp, mapas, SEO inicial, Analytics, Search Console y puesta en producción.",
  },
  {
    title: "Gestión digital mensual",
    price: "Gs. 4.500.000 / mes",
    text: "Estrategia, contenido, diseño, copywriting, publicaciones, Stories, Reels, Community Management, gestión de Meta Ads y reporte mensual.",
  },
  {
    title: "Inversión publicitaria",
    price: "Desde Gs. 1.500.000 / mes",
    text: "Monto destinado directamente a Meta Ads y separado del fee.",
  },
  {
    title: "Hosting + dominio",
    price: "Gs. 900.000 / año",
    text: "Mantenimiento básico de presencia digital y acceso a la web.",
  },
] as const;

export const packageHighlights = [
  "Web + configuración digital",
  "Primer mes de contenido",
  "Diseño y estrategia orientada a conversión",
] as const;

export const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Lucide React",
  "Google Fonts",
] as const;

export const conditions = [
  {
    title: "Desarrollo web",
    items: ["50% al iniciar", "30% con diseño aprobado", "20% antes de publicación"],
  },
  {
    title: "Servicio mensual",
    items: ["Fee mensual adelantado", "Permanencia inicial recomendada de 3 meses", "Renovación mensual posterior"],
  },
  {
    title: "Contenido",
    items: ["Calendario mensual aprobado", "Máximo dos rondas de cambios", "Materiales suministrados por Kostianovsky"],
  },
  {
    title: "Publicidad",
    items: ["La inversión publicitaria se factura y paga por separado", "Las cuentas publicitarias y activos digitales permanecen bajo titularidad del cliente"],
  },
  {
    title: "Propiedades",
    items: ["Kostianovsky deberá proporcionar información actualizada de precios, disponibilidad y condiciones comerciales"],
  },
] as const;
