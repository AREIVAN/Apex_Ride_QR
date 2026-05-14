'use client';

import { Contact, Download, HeartPulse, PhoneCall, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

const benefits: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: WifiOff,
    title: 'Funciona incluso sin internet',
    text: 'El QR carga una vCard con datos críticos dentro del propio código.',
  },
  {
    icon: PhoneCall,
    title: 'Contacto inmediato',
    text: 'Teléfono y contacto ICE listos para llamar desde celular.',
  },
  {
    icon: HeartPulse,
    title: 'Datos médicos en segundos',
    text: 'Sangre, alergias, condiciones y notas visibles sin ruido.',
  },
  {
    icon: Download,
    title: 'Sticker descargable',
    text: 'Exportá PNG o imprimí para casco, moto, cartera o chamarra.',
  },
  {
    icon: Contact,
    title: 'Para riders y clubs',
    text: 'Ideal para rodadas, grupos y pilotos que cuidan a su comunidad.',
  },
];

const railVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const nodeVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function EmergencySignalRail() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-apex-panel via-apex-void to-apex-panel2 px-5 py-8 shadow-card sm:px-8 lg:px-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={railVariants}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(139,92,255,.24),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(47,230,255,.18),transparent_28%)]" />
      <motion.div
        className="pointer-events-none absolute left-10 right-10 top-[5.35rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-apex-violet to-apex-cyan lg:block"
        variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
      />
      <div className="relative grid gap-7 lg:grid-cols-5 lg:gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.article
              key={benefit.title}
              className="group relative grid grid-cols-[2.75rem_1fr] gap-4 pl-2 lg:block lg:pl-0 lg:text-center"
              variants={nodeVariants}
            >
              <div className="absolute bottom-[-1.75rem] left-[1.35rem] top-12 w-px bg-gradient-to-b from-apex-cyan/70 via-apex-violet/50 to-transparent lg:hidden" />
              <div className="relative z-10 mx-auto grid size-11 place-items-center rounded-full border border-apex-cyan/35 bg-apex-panel shadow-cyan transition duration-200 ease-premium group-hover:scale-105 group-hover:border-apex-cyan group-hover:bg-apex-cyan/10">
                <span className="absolute inset-[-.45rem] rounded-full border border-apex-violet/20 opacity-0 transition duration-200 ease-premium group-hover:opacity-100" />
                <Icon className="size-5 text-apex-cyan" />
              </div>
              <div className="lg:mt-8">
                <div className="flex items-center gap-2 lg:justify-center">
                  <span className="font-mono text-xs font-black text-apex-cyan/70">SIG 0{index + 1}</span>
                  <span className="hidden h-px w-8 bg-apex-line lg:block" />
                </div>
                <h3 className="mt-2 text-base font-black tracking-[-.02em] text-white">{benefit.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-apex-muted transition duration-200 ease-premium group-hover:text-apex-text lg:mx-auto">
                  {benefit.text}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}
