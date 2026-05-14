import type { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/shared/Card';
export const metadata: Metadata = { title: 'Cómo funciona' };
const blocks = [
  ['Qué es', 'APEX Emergency QR es una herramienta local-first para crear un QR de emergencia con datos médicos, contacto ICE y datos de moto.'],
  ['Offline vs online', 'El QR contiene una vCard para funcionar sin internet. Además incluye un link comprimido con LZString para abrir una vista online si hay conexión.'],
  ['Descarga e impresión', 'Desde /crear podés exportar el sticker como PNG o imprimirlo directamente. Recomendación: imprimir con buen contraste y plastificar.'],
  ['Dónde ponerlo', 'Casco, moto, cartera o chamarra. Debe estar visible, protegido y ser fácil de escanear.'],
  ['Privacidad', 'No hay backend ni base de datos. Aun así, cualquier persona que escanee ve lo que cargaste: compartí solo datos que aceptás exponer.'],
  ['FAQ básica', 'No reemplaza documentos oficiales, seguro ni atención médica. Es una ayuda rápida para primeros respondientes y acompañantes.'],
];
export default function ComoFuncionaPage() { return <main className="apex-container py-16"><SectionHeader eyebrow="Cómo funciona" title="Simple por fuera. Bien pensado por dentro." description="La clave no es meter más tecnología: es conservar lo importante cuando no hay señal, batería o tiempo." /><div className="mt-10 grid gap-5 md:grid-cols-2">{blocks.map(([title, text]) => <Card key={title} className="p-6"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-apex-muted">{text}</p></Card>)}</div></main>; }
