"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Camera,
  ChevronRight,
  ExternalLink,
  MapPinned,
  MessageSquareMore,
  Search,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SimpleExplanation } from "@/components/ui/SimpleExplanation";
import { ExampleBadge } from "@/components/ui/ExampleBadge";
import { Footer } from "@/components/ui/Footer";
import {
  conditions,
  contentCategories,
  exampleNotes,
  glossary,
  growthSteps,
  investmentTiers,
  kosvasCase,
  launchPlan,
  navItems,
  packageHighlights,
  pillars,
  seoFeatures,
  sections,
  socialFormats,
  webFeatures,
} from "@/data/site";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  return <motion.div className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-brand" style={{ scaleX }} />;
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-300 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
      {children}
    </span>
  );
}

export function Presentation() {
  return (
    <div className="min-h-screen bg-background text-stone-900 selection:bg-brand selection:text-white">
      <ScrollProgress />

      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" className="flex shrink-0 items-center" aria-label="Kostianovsky - Inicio">
            <Image
              src="/images/logo.jpg"
              alt="Inmobiliaria Kostianovsky"
              width={287}
              height={185}
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-[10px] uppercase tracking-[0.22em] text-stone-600 transition hover:text-stone-900">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-stone-200 bg-stone-950 text-stone-50">
          <Image src="/images/hero.svg" alt="Placeholder arquitectónico de hero para Kostianovsky" fill className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_38%),linear-gradient(90deg,rgba(12,11,10,0.84)_0%,rgba(12,11,10,0.72)_30%,rgba(12,11,10,0.62)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 md:px-8 lg:pb-28 lg:pt-28">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="max-w-4xl">
              <SectionTag>Kostianovsky 2026</SectionTag>
              <h1 className="mt-8 break-words font-serif text-4xl leading-[0.95] sm:text-5xl md:text-7xl lg:text-[7rem] lg:leading-[0.9]">KOSTIANOVSKY</h1>
              <p className="mt-4 max-w-xl text-xl font-medium tracking-[0.12em] text-white md:text-2xl">Ecosistema Digital Inmobiliario</p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">Una nueva experiencia digital para una inmobiliaria con historia.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-white/85">
                <span>Web</span><span>•</span><span>Contenido</span><span>•</span><span>Redes sociales</span><span>•</span><span>Captación</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="01 — Visión"
                title="La trayectoria ya existe. El próximo paso es digitalizarla."
                description="Kostianovsky cuenta con décadas de experiencia y una trayectoria construida sobre la confianza. El desafío actual consiste en trasladar ese patrimonio de marca a una experiencia digital capaz de mostrar, informar, atraer, convertir y medir."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_30px_80px_rgba(28,25,23,0.08)]">
                <Image src="/images/history.svg" alt="Placeholder visual histórico de Kostianovsky" width={1200} height={900} className="h-72 w-full rounded-[1.5rem] object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="ecosistema" className="bg-stone-900 py-24 text-stone-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="02 — El desafío" title="Unificar todos los puntos de contacto digital." description="Una propuesta pensada para que la marca se vea, se entienda y se convierta en oportunidades." align="left" tone="dark" />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="group rounded-[2rem] border border-stone-700 bg-stone-800/80 p-6">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-stone-600 bg-stone-700 text-stone-50">
                      {index === 0 ? <Building2 size={18} /> : index === 1 ? <MapPinned size={18} /> : index === 2 ? <Camera size={18} /> : <TrendingUp size={18} />}
                    </div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-brand-light">0{index + 1}</p>
                    <h3 className="mb-4 font-serif text-3xl text-stone-50">{pillar.title}</h3>
                    <p className="text-base leading-7 text-white/80">{pillar.description}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="03 — Evolución digital" title="Lo que funcionaba entonces ahora puede evolucionar." />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {sections.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(41,37,36,0.05)] md:p-8">
                  <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-stone-500">{index === 0 ? "2017" : "2026"}</p>
                  <h3 className="mb-6 font-serif text-3xl text-stone-900">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.years.map((item) => (
                      <span key={item} className={`rounded-full border px-3 py-2 text-xs font-medium ${index === 1 ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-200 bg-stone-100 text-stone-700"}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="web" className="bg-panel py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="04 — Nuevo sitio web" title="De una web institucional a una herramienta comercial." description="Diseño visual personalizado, estructura pensada para el usuario, adaptación a cualquier pantalla, velocidad, SEO, formularios, WhatsApp, mapas, galerías y foco en la conversión comercial." />
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <Reveal>
                <div className="rounded-[2rem] border border-stone-200 bg-[#f7f4f0] p-4 shadow-[0_25px_80px_rgba(28,25,23,0.08)]">
                  <div className="mb-4">
                    <ExampleBadge variant="propuesta-visual" description={exampleNotes.webMockup} />
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    </div>
                    <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                      <div className="space-y-4">
                        <div className="h-32 rounded-2xl bg-stone-200" />
                        <div className="h-20 rounded-2xl bg-stone-100" />
                        <div className="h-20 rounded-2xl bg-stone-100" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-20 rounded-2xl bg-stone-900 px-5 py-4 text-stone-50">
                          <div className="text-[10px] uppercase tracking-[0.28em] text-stone-300">Kostianovsky</div>
                          <div className="mt-2 font-serif text-2xl">Propiedades</div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="h-40 rounded-2xl bg-[linear-gradient(135deg,#dad1c5,#f7efe7)]" />
                          <div className="h-40 rounded-2xl bg-[linear-gradient(135deg,#d8d8d8,#efefef)]" />
                        </div>
                        <div className="h-28 rounded-2xl bg-stone-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-4">
                  {webFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm text-stone-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-stone-50"><CheckIcon /></span>{item}</div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <SimpleExplanation term={glossary.ux.term} text={glossary.ux.text} />
                  <SimpleExplanation term={glossary.responsive.term} text={glossary.responsive.text} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contenido" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="05 — Catálogo inmobiliario" title="El corazón comercial de la nueva web." />
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_25px_80px_rgba(28,25,23,0.06)] md:p-6">
                <div className="mb-4">
                  <ExampleBadge variant="simulacion" description={exampleNotes.propertyListing} />
                </div>
                <div className="flex flex-wrap gap-2 pb-4">
                  {[
                    "Ubicación",
                    "Tipo",
                    "Operación",
                    "Precio",
                    "Superficie",
                    "Zonificación",
                  ].map((filter) => (
                    <span key={filter} className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-stone-600">{filter}</span>
                  ))}
                </div>
                <Image src="/images/property-01.svg" alt="Mockup de terreno Kostianovsky" width={1200} height={900} className="h-[430px] w-full rounded-[1.5rem] object-cover" />
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-stone-200 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Lote · Asunción</p>
                    <h3 className="mt-2 font-serif text-4xl text-stone-900">USD 185.000</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">WhatsApp <ArrowRight size={14} /></span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {["8.500 m²", "Frente 60 m", "Uso mixto", "Acceso pavimentado"].map((meta) => (
                    <div key={meta} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">{meta}</div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="rounded-[2rem] border border-stone-200 bg-panel p-6">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-muted">Ficha de propiedad</p>
                  <div className="mt-5 space-y-4 text-sm text-stone-700">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2"><span>Ubicación</span><span>Asunción</span></div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2"><span>Estado</span><span>Disponible</span></div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2"><span>Código</span><span>MRK-224</span></div>
                    <div className="flex items-center justify-between"><span>Mapa</span><span>Ver ubicación</span></div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-stone-50">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-brand-light">Objetivo</p>
                  <p className="mt-4 font-serif text-4xl leading-tight">Cada visita debe tener un siguiente paso.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-stone-950 py-24 text-stone-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="06 — Conversión" title="El objetivo no es solamente obtener visitas. El objetivo es generar oportunidades comerciales." description="Desde la visita a la propiedad hasta la conversación con un asesor, cada paso debe estar orientado a convertir interés en negocio." tone="dark" />
            </Reveal>

            <div className="mt-12 flex flex-col items-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "VISITA WEB",
                  "PROPIEDAD",
                  "CONSULTA",
                  "WHATSAPP",
                  "ASESOR",
                  "OPORTUNIDAD",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-full border border-stone-700 bg-stone-900 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-100">{step}</div>
                    {index < 5 ? <ChevronRight className="text-stone-500" size={16} /> : null}
                  </div>
                ))}
              </div>
              <div className="mt-8 w-full max-w-xl">
                <ExampleBadge variant="ejemplo" description={exampleNotes.conversionFunnel} tone="dark" />
              </div>
              <div className="mt-6 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <SimpleExplanation term={glossary.lead.term} text={glossary.lead.text} tone="dark" />
                <SimpleExplanation term={glossary.conversion.term} text={glossary.conversion.text} tone="dark" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="07 — SEO + Google" title="Ser encontrados cuando alguien está buscando una propiedad." />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="space-y-4">
                {seoFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-700"><Search size={16} className="text-stone-500" />{item}</div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                <SimpleExplanation term={glossary.seo.term} text={glossary.seo.text} />
                <SimpleExplanation term={glossary.searchConsole.term} text={glossary.searchConsole.text} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_25px_80px_rgba(28,25,23,0.05)]">
                <div className="mb-4">
                  <ExampleBadge variant="simulacion" description={exampleNotes.googleSearch} />
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 p-4">
                  <div className="mb-5 flex items-center gap-2 text-stone-400">
                    <div className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                  </div>
                  <div className="flex items-center gap-3 rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-500"><Search size={14} />terrenos en asunción 2026</div>
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><p className="text-xs uppercase tracking-[0.2em] text-stone-500">Resultado 01</p><p className="mt-2 font-semibold text-stone-900">Kostianovsky | Lotes y terrenos premium en Asunción</p></div>
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4"><p className="text-xs uppercase tracking-[0.2em] text-stone-500">Resultado 02</p><p className="mt-2 font-semibold text-stone-900">Lotes y fracciones en zonas selectas</p></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-panel py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="08 — Redes sociales" title="De publicar por publicar a comunicar con propósito." description="Cada pieza debe responder a un objetivo. El contenido debe reforzar la marca, educar, generar interés y convertir la atención en consultas." />
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="space-y-3">
                {contentCategories.map((category, index) => (
                  <Reveal key={category} delay={index * 0.05}>
                    <div className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700"><span>{category}</span><ArrowRight size={16} className="text-stone-500" /></div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.08}>
                <div className="mb-4">
                  <ExampleBadge variant="ejemplo" description={exampleNotes.socialContent} />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {["/images/property-02.svg", "/images/property-03.svg", "/images/kosvas.svg"].map((src, index) => (
                    <div key={src} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_18px_40px_rgba(41,37,36,0.05)]">
                      <Image src={src} alt={`Mockup de contenido social ${index + 1}`} width={1200} height={1400} className="h-80 w-full rounded-[1.5rem] object-cover" />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="09 — Contenido mensual" title="Contenido que convierte atención en interés." />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-stone-50">
                <div className="grid gap-4 sm:grid-cols-3">
                  {socialFormats.map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-stone-700 bg-stone-800 p-4">
                      <p className="font-serif text-4xl text-stone-50">{item.label}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-stone-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3 text-sm text-stone-300">
                  <p>• Propiedades</p>
                  <p>• Proyectos</p>
                  <p>• Oportunidades</p>
                  <p>• Trayectoria</p>
                  <p>• Consejos inmobiliarios</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Propiedades",
                  "Proyectos",
                  "Contenido institucional",
                  "Zonas y barrios",
                  "Educación inmobiliaria",
                  "Casos y trayectorias",
                ].map((item) => (
                  <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-white p-5">
                    <p className="font-serif text-3xl text-stone-900">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-stone-900 py-24 text-stone-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="10 — Community Management" title="De publicar a acompañar al cliente." description="Comentarios, mensajes directos, seguimiento, coordinación con vendedores y protocolos claros para que cada consulta avance." tone="dark" />
            </Reveal>

            <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                {[
                  "Comentarios",
                  "Mensajes directos",
                  "Seguimiento",
                  "Derivación de consultas",
                  "Coordinación con vendedores",
                  "Clasificación de consultas",
                  "Reporte mensual",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-stone-700 bg-stone-800 px-4 py-3 text-stone-200"><MessageSquareMore size={16} className="text-stone-300" />{item}</div>
                ))}
              </div>
              <div className="flex-1 rounded-[2rem] border border-stone-700 bg-stone-800 p-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-light">Flujo</p>
                <div className="mt-5 space-y-4 text-sm text-stone-200">
                  <div className="rounded-xl bg-stone-700 px-4 py-3">REDES</div>
                  <div className="flex justify-center"><ChevronRight /></div>
                  <div className="rounded-xl bg-stone-700 px-4 py-3">CONSULTA</div>
                  <div className="flex justify-center"><ChevronRight /></div>
                  <div className="rounded-xl bg-stone-700 px-4 py-3">CLASIFICACIÓN</div>
                  <div className="flex justify-center"><ChevronRight /></div>
                  <div className="rounded-xl bg-stone-700 px-4 py-3">ASESOR KOSTIANOVSKY</div>
                  <div className="flex justify-center"><ChevronRight /></div>
                  <div className="rounded-xl bg-stone-700 px-4 py-3">SEGUIMIENTO</div>
                </div>
                <div className="mt-5">
                  <ExampleBadge variant="ejemplo" description={exampleNotes.communityFlow} tone="dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="performance" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="11 — Publicidad digital" title="Convertir inversión publicitaria en oportunidades." />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-4">
            {growthSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl text-stone-900">{step}</h3>
                  <p className="mt-4 text-sm leading-6 text-stone-600">
                    {index === 0 ? "Fortalecer la marca y ampliar su presencia." : index === 1 ? "Llevar usuarios a la web con mensajes claros." : index === 2 ? "Generar consultas de personas interesadas." : "Volver a impactar a usuarios ya interesados."}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <SimpleExplanation term={glossary.metaAds.term} text={glossary.metaAds.text} />
            <SimpleExplanation term={glossary.performance.term} text={glossary.performance.text} />
            <SimpleExplanation term={glossary.remarketing.term} text={glossary.remarketing.text} />
          </div>
        </section>

        <section className="bg-panel py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="12 — Medición" title="Lo que medimos, podemos mejorar." />
            </Reveal>

            <div className="mb-6">
              <ExampleBadge variant="ejemplo" description={exampleNotes.metrics} />
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Alcance", value: "—" },
                { label: "Interacciones", value: "—" },
                { label: "Seguidores", value: "—" },
                { label: "Visitas web", value: "—" },
                { label: "Consultas", value: "—" },
                { label: "WhatsApp", value: "—" },
                { label: "Consultas (Leads)", value: "—" },
                { label: "Resultados de campañas", value: "—" },
              ].map((item) => (
                <Reveal key={item.label}>
                  <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-stone-500">{item.label}</p>
                    <p className="mt-4 font-serif text-4xl text-stone-900">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6">
              <SimpleExplanation term={glossary.analytics.term} text={glossary.analytics.text} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="13 — Fase 2" title="El siguiente paso: automatización comercial." description="Un horizonte de crecimiento orientado a convertir la actividad digital en un sistema comercial más eficiente y medible." />
          </Reveal>

          <div className="mb-6">
            <ExampleBadge variant="propuesta-visual" description={exampleNotes.crmRoadmap} />
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_25px_80px_rgba(28,25,23,0.05)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {[
                "Formulario web",
                "CRM",
                "Vendedor",
                "Seguimiento",
                "Resultado",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full border border-stone-200 bg-stone-100 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-stone-700">{item}</div>
                  {index < 4 ? <ArrowRight className="text-stone-400" size={16} /> : null}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "WhatsApp Business",
                "Automatizaciones",
                "Clasificación de consultas",
                "Historial de consultas",
                "Seguimiento de propiedades",
                "Volver a contactar (Remarketing)",
                "Email marketing",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">{item}</div>
              ))}
            </div>
            <div className="mt-6">
              <SimpleExplanation term={glossary.crm.term} text={glossary.crm.text} />
            </div>
          </div>
        </section>

        <section id="inversion" className="bg-stone-900 py-24 text-stone-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="14 — Inversión" title="Inversión" tone="dark" />
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {investmentTiers.map((tier, index) => (
                <Reveal key={tier.title} delay={index * 0.05}>
                  <div className="rounded-[2rem] border border-stone-700 bg-stone-800 p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-light">{tier.title}</p>
                    <p className="mt-4 font-serif text-4xl leading-none text-stone-50">{tier.price}</p>
                    <p className="mt-5 text-sm leading-7 text-white/80">{tier.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12 rounded-[2rem] border border-brand-dark bg-brand p-8 text-white shadow-[0_35px_90px_rgba(226,0,26,0.3)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">{launchPlan.savingsNote}</p>
                <h3 className="mt-4 font-serif text-5xl leading-none">{launchPlan.title}</h3>
                <p className="mt-4 text-base text-white/80">{launchPlan.description}</p>
                <div className="mt-8 flex flex-wrap items-baseline gap-3">
                  <p className="font-serif text-2xl text-white/60 line-through">{launchPlan.originalPrice}</p>
                  <p className="font-serif text-5xl">{launchPlan.price}</p>
                </div>
                <p className="mt-4 text-base text-white/80">{launchPlan.afterLabel}</p>
                <p className="mt-2 font-serif text-4xl">{launchPlan.afterPrice}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {packageHighlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/40 bg-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="15 — Condiciones" title="Condiciones" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {conditions.map((condition) => (
              <Reveal key={condition.title}>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">{condition.title}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
                    {condition.items.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-stone-900" />{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-stone-950 py-24 text-stone-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-light">16 — Caso KOSVAS</p>
              <h2 className="font-serif text-4xl leading-none text-white md:text-5xl xl:text-6xl">Caso KOSVAS</h2>
              <p className="mt-4 text-lg font-medium text-brand-light">Una metodología que ya aplicamos.</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg">{kosvasCase.description}</p>
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <div className="rounded-[2rem] border border-stone-700 bg-stone-900 p-4">
                  <div className="mb-4">
                    <ExampleBadge variant="ejemplo" description={exampleNotes.kosvasVisual} tone="dark" />
                  </div>
                  <Image src="/images/kosvas.svg" alt="Vista ilustrativa del proyecto KOSVAS" width={1200} height={900} className="h-[320px] w-full rounded-[1.5rem] object-cover" />
                  <div className="mt-5 rounded-2xl border border-stone-700 bg-stone-800 px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400">Concepto de marca</p>
                    <p className="mt-2 font-serif text-2xl italic text-white">&ldquo;{kosvasCase.tagline}&rdquo;</p>
                  </div>
                  <a
                    href={kosvasCase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-dark"
                  >
                    Visitar KOSVAS <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {kosvasCase.components.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-stone-700 bg-stone-800 p-5">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-stone-300">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {kosvasCase.proofPoints.map((point) => (
                    <div key={point.title} className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-brand-light">{point.title}</p>
                      <p className="mt-1 text-sm text-stone-200">{point.text}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-stone-400">{kosvasCase.proofNote}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="proximo-paso" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-28">
          <Reveal>
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-[0_35px_100px_rgba(28,25,23,0.06)] md:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Próximo capítulo</p>
              <h2 className="mt-6 font-serif text-5xl leading-none text-stone-900 md:text-6xl">El próximo capítulo de Kostianovsky.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">Más de siete décadas construyendo confianza. Ahora es momento de convertir esa trayectoria en una experiencia digital a la altura de la marca.</p>
              <p className="mt-8 break-words font-serif text-3xl text-stone-900 sm:text-5xl md:text-7xl">KOSTIANOVSKY 2026</p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 tracking-[0.02em] text-stone-600">Una propuesta para convertir trayectoria en una experiencia digital moderna.</p>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3"><path d="M3.5 8.3 6.3 11l6.2-7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
