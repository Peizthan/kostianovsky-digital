export const navItems = [
  { id: "vision", label: "01 — Visión" },
  { id: "ecosistema", label: "02 — Ecosistema" },
  { id: "web", label: "03 — Web" },
  { id: "contenido", label: "04 — Contenido" },
  { id: "performance", label: "05 — Performance" },
  { id: "inversion", label: "06 — Inversión" },
  { id: "proximo-paso", label: "07 — Próximo paso" },
] as const;

// Glosario de términos técnicos: explicación breve y directa para público no técnico.
export const glossary = {
  ux: {
    term: "Diseño pensado para el usuario (UX)",
    text: "En palabras simples: organizamos la información para que cualquier visitante encuentre fácilmente lo que busca.",
  },
  responsive: {
    term: "Adaptada a celular, tablet y computadora",
    text: "En palabras simples: el contenido se acomoda automáticamente al tamaño de cada pantalla.",
  },
  seo: {
    term: "SEO",
    text: "En palabras simples: preparamos la página para que Google pueda encontrarla y mostrarla cuando alguien busca propiedades.",
  },
  searchConsole: {
    term: "Google Search Console",
    text: "En palabras simples: una herramienta de Google que muestra cómo aparece nuestra página en las búsquedas.",
  },
  analytics: {
    term: "Google Analytics",
    text: "En palabras simples: nos permite saber cuántas personas visitan la página y qué contenido les interesa.",
  },
  metaAds: {
    term: "Meta Ads",
    text: "En palabras simples: la publicidad paga en Facebook e Instagram para llegar a más personas interesadas en propiedades.",
  },
  performance: {
    term: "Performance",
    text: "En palabras simples: medir los resultados de la publicidad para invertir mejor el presupuesto.",
  },
  lead: {
    term: "Consulta / oportunidad (Lead)",
    text: "En palabras simples: una persona que pidió información y puede convertirse en cliente.",
  },
  conversion: {
    term: "Conversión",
    text: "En palabras simples: cuando una visita se transforma en una consulta real o un negocio concreto.",
  },
  remarketing: {
    term: "Volver a contactar digitalmente (Remarketing)",
    text: "En palabras simples: mostrar nuevamente nuestra propuesta a personas que ya demostraron interés.",
  },
  crm: {
    term: "Organización de clientes (CRM)",
    text: "En palabras simples: permite ordenar las consultas para que ninguna oportunidad quede olvidada.",
  },
} as const;

// Aclaraciones para mockups y simulaciones: evita que se confundan con datos reales de Kostianovsky.
export const exampleNotes = {
  webMockup: "Esta imagen y esta estructura son una propuesta visual del sitio. El diseño final puede variar.",
  propertyListing:
    "Datos e imágenes utilizados únicamente para mostrar una posible presentación de una propiedad.",
  conversionFunnel:
    "Este es un ejemplo del recorrido que puede seguir una persona interesada, no un dato real todavía.",
  googleSearch:
    "Esta es una simulación de cómo podrían verse los resultados en Google. Todavía no son datos reales.",
  socialContent: "Estas imágenes son ejemplos ilustrativos de posibles publicaciones para redes sociales.",
  communityFlow: "Este es un ejemplo del flujo de atención que proponemos para ordenar las consultas.",
  metrics:
    "Estas categorías son ilustrativas. Los números reales se completan una vez que la campaña esté en marcha.",
  crmRoadmap:
    "Propuesta visual de una futura herramienta de organización de clientes y seguimiento comercial.",
  kosvasVisual:
    "Imagen ilustrativa del proyecto. El sitio y el caso son reales: podés visitarlo con el botón de abajo.",
} as const;

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

export const webFeatures = [
  "Diseño visual personalizado",
  "Diseño pensado para el usuario (UX)",
  "Adaptada a celular, tablet y computadora",
  "Optimización de velocidad",
  "SEO",
  "Formularios y WhatsApp",
  "Google Analytics",
  "Google Search Console",
] as const;

export const seoFeatures = [
  "SEO",
  "Títulos y descripciones claras para cada página",
  "Direcciones web claras (URLs)",
  "Contenido que Google puede leer",
  "Mapa del sitio para Google (Sitemap)",
  "Google Search Console",
  "Posicionamiento en Asunción y alrededores",
  "Google Maps",
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
  "Consultas (Leads)",
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
    price: "Gs. 6.500.000 / mes",
    text: "Estrategia, contenido, diseño, copywriting, publicaciones, Stories, Reels, Community Management, gestión de Meta Ads y reporte mensual.",
  },
  {
    title: "Inversión publicitaria",
    price: "Desde Gs. 1.500.000 / mes",
    text: "Monto destinado directamente a Meta Ads y separado del fee.",
  },
  {
    title: "Hosting + dominio",
    price: "Gs. 1.100.000 / año",
    text: "Mantenimiento básico de presencia digital y acceso a la web.",
  },
] as const;

export const launchPlan = {
  title: "Ecosistema Digital Kostianovsky",
  description: "Web + configuración digital + primer mes de contenido",
  originalPrice: "Gs. 19.000.000",
  price: "Gs. 17.500.000",
  savingsNote: "Precio especial de lanzamiento",
  afterLabel: "Después del lanzamiento:",
  afterPrice: "Gs. 6.500.000 / mes",
} as const;

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

export const kosvasCase = {
  url: "https://kosvaspy.com",
  tagline: "El inicio de un legado.",
  description:
    "Un proyecto inmobiliario en el que desarrollamos una presencia digital completa, desde la identidad y la estructura de comunicación hasta el sitio web y la presentación de propiedades.",
  components: [
    {
      title: "Identidad y estrategia",
      text: "Desarrollo del posicionamiento y comunicación digital de la marca.",
    },
    {
      title: "Sitio web",
      text: "Un sitio web pensado para centralizar la información de la empresa y sus oportunidades inmobiliarias.",
    },
    {
      title: "Catálogo de propiedades",
      text: "Las propiedades se presentan de manera ordenada, con información, imágenes y opciones para consultar.",
    },
    {
      title: "Contacto",
      text: "Integración de formularios y contacto directo por WhatsApp.",
    },
    {
      title: "Contenido",
      text: "Creación de contenido para redes sociales orientado a propiedades, oportunidades, marca y comunicación comercial.",
    },
    {
      title: "Evolución",
      text: "Una estructura digital preparada para seguir incorporando propiedades, contenido y herramientas.",
    },
  ],
  proofPoints: [
    { title: "Web", text: "kosvaspy.com" },
    { title: "Propiedades", text: "Catálogo inmobiliario." },
    { title: "Contacto", text: "Formulario + WhatsApp." },
  ],
  proofNote:
    "Este caso demuestra que la propuesta no parte solamente de una idea conceptual: ya existe una metodología aplicada en un proyecto inmobiliario real.",
} as const;

// Placeholders: reemplazar con los datos de contacto reales antes de publicar.
export const contactInfo = {
  name: "Iván Kostianovsky",
  role: "Estrategia Digital · Desarrollo Web · Diseño · Contenido",
  email: "ivankostianovsky@gmail.com",
  phone: "+595 992 927 457",
  whatsapp: "+595 992 927 457",
  linkedin: "https://www.linkedin.com/in/ivankostianovsky/",
  portfolio: "https://peizthan-portfolio.vercel.app",
} as const;
