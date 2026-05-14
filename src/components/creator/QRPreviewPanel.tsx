'use client';
import { useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { StickerPreview } from './StickerPreview';
import { VCardPreview } from './VCardPreview';
import { CreatorActions } from './CreatorActions';
import type { EmergencyProfile } from '@/lib/emergency/types';

export function QRPreviewPanel({ profile, link, vcard, onSave, onLoad, onClear }: { profile: EmergencyProfile; link: string; vcard: string; onSave: () => void; onLoad: () => void; onClear: () => void }) {
  const stickerRef = useRef<HTMLDivElement>(null);
  const ready = Boolean(profile.alias || profile.name || profile.phone || profile.contact || profile.bike || profile.plate);
  return <aside className="space-y-5 lg:sticky lg:top-24"><div className="glass-card rounded-4xl p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[.16em] text-apex-cyan">Sticker imprimible</p><h2 className="mt-1 text-xl font-black">Emergency QR</h2></div><span className={`rounded-full px-3 py-1 text-xs font-black ${ready ? 'bg-emerald-400/15 text-emerald-200' : 'bg-white/10 text-apex-muted'}`}>{ready ? 'LISTO' : 'SIN CONFIGURAR'}</span></div><StickerPreview ref={stickerRef} profile={profile} vcard={vcard} /><div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] p-3 text-sm text-apex-muted"><ShieldCheck className="size-4 text-apex-cyan" /> El QR contiene vCard offline. El link online va dentro de la nota.</div><CreatorActions link={link} vcard={vcard} stickerRef={stickerRef} onSave={onSave} onLoad={onLoad} onClear={onClear} /></div><VCardPreview vcard={vcard} link={link} /></aside>;
}
