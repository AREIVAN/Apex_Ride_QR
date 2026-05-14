'use client';
import { useMemo } from 'react';
import { decodeEmergencyProfile, payloadToProfile } from '@/lib/emergency/compression';
import { buildEmergencySummary } from '@/lib/emergency/emergency-summary';
import { EmergencyHeader } from './EmergencyHeader';
import { EmergencyActionButtons } from './EmergencyActionButtons';
import { MedicalInfoCard } from './MedicalInfoCard';
import { MotorcycleInfoCard } from './MotorcycleInfoCard';
import { EmergencySummaryCard } from './EmergencySummaryCard';

function getEncoded() { if (typeof window === 'undefined') return ''; const q = new URLSearchParams(window.location.search).get('e'); const h = window.location.hash.match(/#e=([^&]+)/)?.[1]; return q || h || ''; }
export function EmergencyViewer() { const result = useMemo(() => { const encoded = getEncoded(); const decoded = encoded ? decodeEmergencyProfile(encoded) : null; return decoded ? payloadToProfile(decoded) : null; }, []); if (!result) return <main className="apex-container py-10"><div className="rounded-[2rem] border border-apex-danger/30 bg-apex-danger/10 p-8"><h1 className="text-3xl font-black">Link de emergencia inválido o vacío</h1><p className="mt-3 text-apex-muted">No pude leer los datos comprimidos. Verificá que el QR o el link estén completos.</p></div></main>; const summary = buildEmergencySummary(result); return <main className="apex-container max-w-4xl py-8"><div className="grid gap-5"><EmergencyHeader profile={result} /><EmergencyActionButtons phone={result.phone} summary={summary} /><MedicalInfoCard profile={result} /><EmergencySummaryCard profile={result} /><MotorcycleInfoCard profile={result} /><p className="text-sm text-apex-muted">Prioridad: llamar a emergencias locales si hay riesgo vital. Esta tarjeta no reemplaza documentos oficiales ni criterio médico.</p></div></main>; }
