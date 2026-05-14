'use client';

import { ClipboardList, Download, PhoneCall, Printer, QrCode, Siren } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

const steps: Array<{ number: string; title: string; description: string; icon: LucideIcon }> = [
  {
    number: '01',
    title: 'Captura tus datos.',
    description: 'Identidad, contacto ICE, datos médicos y moto en un flujo claro.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Genera tu QR.',
    description: 'La información crítica queda lista para vCard offline y vista online.',
    icon: QrCode,
  },
  {
    number: '03',
    title: 'Descarga o imprime tu sticker.',
    description: 'Exportá PNG o preparalo para casco, moto, cartera o chamarra.',
    icon: Download,
  },
  {
    number: '04',
    title: 'En emergencia, cualquier persona escanea y ve la información.',
    description: 'Menos fricción, más contexto útil en segundos críticos.',
    icon: Siren,
  },
];

const chips = ['Sin backend', 'Offline', 'Exportable', 'Listo para emergencia'];

export function QRCreationFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-apex-line bg-apex-panel/70 p-5 shadow-card sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(47,230,255,.13),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(139,92,255,.18),transparent_34%)]" />
      <div className="relative flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1 text-xs font-black uppercase tracking-[.18em] text-apex-muted">
            {chip}
          </span>
        ))}
      </div>

      <motion.div
        className="relative mt-12 grid gap-10 lg:grid-cols-4 lg:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-90px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div
          className="absolute left-[1.35rem] top-0 h-full w-px origin-top bg-gradient-to-b from-apex-cyan via-apex-violet to-transparent lg:left-0 lg:right-0 lg:top-[2.2rem] lg:h-px lg:w-full lg:origin-left lg:bg-gradient-to-r"
          variants={{ hidden: { scaleX: 0, scaleY: 0, opacity: 0 }, show: { scaleX: 1, scaleY: 1, opacity: 1, transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } } }}
        />
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.number}
              className="group relative grid grid-cols-[3rem_1fr] gap-5 lg:block lg:pr-4"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <div className="relative z-10 grid size-11 place-items-center rounded-full border border-apex-cyan/35 bg-apex-void shadow-cyan transition duration-200 ease-premium group-hover:scale-105 group-hover:border-apex-cyan">
                <Icon className="size-5 text-apex-cyan" />
              </div>
              <div className="relative z-10 lg:mt-8">
                <span className="pointer-events-none absolute -left-2 -top-8 select-none text-7xl font-black tracking-[-.08em] text-white/[.045] lg:-left-3 lg:-top-10 lg:text-8xl">
                  {step.number}
                </span>
                <p className="font-mono text-sm font-black text-apex-cyan">{step.number}</p>
                <h3 className="mt-2 text-xl font-black tracking-[-.04em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-apex-muted">{step.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="relative mt-10 flex items-center justify-end gap-3 text-sm font-black text-apex-muted">
        <span>Captura</span>
        <span className="h-px w-6 bg-apex-line" />
        <span>Genera</span>
        <span className="h-px w-6 bg-apex-line" />
        <span>Descarga</span>
        <span className="h-px w-6 bg-apex-line" />
        <span className="inline-flex items-center gap-2 text-apex-cyan"><PhoneCall className="size-4" /> Escanea</span>
        <Printer className="ml-2 size-4 text-apex-violet" />
      </div>
    </div>
  );
}
