import type { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { StickerGallery } from '@/components/stickers/StickerGallery';
export const metadata: Metadata = { title: 'Formatos de stickers' };
export default function StickersPage() { return <main className="apex-container py-16"><SectionHeader eyebrow="Stickers" title="Formatos pensados para casco, moto y cartera." description="Hoy está implementado el sticker cuadrado exportable. Las demás variantes quedan preparadas como plantillas futuras, sin fingir funcionalidades." /><div className="mt-10"><StickerGallery /></div></main>; }
