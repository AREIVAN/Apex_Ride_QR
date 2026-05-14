'use client';
import { forwardRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { AlertTriangle } from 'lucide-react';
import type { EmergencyProfile } from '@/lib/emergency/types';

export const StickerPreview = forwardRef<HTMLDivElement, { profile: EmergencyProfile; vcard: string }>(function StickerPreview({ profile, vcard }, ref) {
  const who = profile.alias || profile.name || '—';
  return <div className="grid place-items-center rounded-[2rem] border border-apex-cyan/20 bg-white/[.04] p-5"><div ref={ref} className="print-only-sticker grid w-[300px] place-items-center gap-3 rounded-[1.35rem] border-2 border-slate-950 bg-white p-4 text-center text-slate-950 shadow-2xl"><div className="rounded-2xl bg-white p-2"><QRCodeSVG value={vcard} size={214} level="M" fgColor="#020617" bgColor="#ffffff" /></div><div className="flex items-center gap-2 text-lg font-black tracking-[.14em]"><AlertTriangle className="size-5 text-red-600" /> EMERGENCIA</div><strong className="max-w-full break-words text-sm font-black uppercase tracking-wide">PILOTO: {who}</strong><span className="text-xs font-bold text-slate-500">Escanea para ver datos ICE</span></div></div>;
});
