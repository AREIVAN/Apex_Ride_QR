'use client';
import { Phone, MessageCircle, Clipboard } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
export function EmergencyActionButtons({ phone, summary }: { phone: string; summary: string }) { const { copy } = useCopyToClipboard(); const digits = phone.replace(/[^\d]/g, ''); return <div className="grid gap-3 sm:grid-cols-3"><Button href={phone ? `tel:${phone}` : '#'} className="bg-apex-danger from-apex-danger to-red-500"><Phone className="size-5" />Llamar</Button><Button href={digits ? `https://wa.me/${digits}` : '#'} variant="secondary"><MessageCircle className="size-5" />WhatsApp</Button><Button type="button" variant="secondary" onClick={() => void copy(summary)}><Clipboard className="size-5" />Copiar resumen</Button></div>; }
