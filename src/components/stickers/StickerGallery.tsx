import { StickerTemplateCard } from './StickerTemplateCard';
const templates = [
  { title: 'Sticker cuadrado', status: 'Implementado' as const, ratio: '1 / 1', text: 'Formato actual para casco, cartera o zona plana de moto.' },
  { title: 'Sticker vertical', status: 'Plantilla futura' as const, ratio: '3 / 4', text: 'Pensado para chamarras o laterales de tanque.' },
  { title: 'Sticker minimal', status: 'Plantilla futura' as const, ratio: '1 / 1', text: 'Versión ultra discreta con menor copy.' },
  { title: 'Premium casco', status: 'Plantilla futura' as const, ratio: '4 / 3', text: 'Mayor contraste y etiqueta visible para curvatura de casco.' },
  { title: 'Tanque / moto', status: 'Plantilla futura' as const, ratio: '16 / 9', text: 'Horizontal para superficies de moto.' },
  { title: 'Cartera', status: 'Plantilla futura' as const, ratio: '1.58 / 1', text: 'Formato tarjeta portable.' },
];
export function StickerGallery() { return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{templates.map((template) => <StickerTemplateCard key={template.title} {...template} />)}</div>; }
