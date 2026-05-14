import { Card } from '@/components/shared/Card';
import type { EmergencyProfile } from '@/lib/emergency/types';
export function EmergencySummaryCard({ profile }: { profile: EmergencyProfile }) { return <Card className="p-5"><h2 className="text-xl font-black">Contacto de emergencia</h2><p className="mt-3 text-lg font-bold text-white">{profile.contact || '—'}</p><p className="mt-2 text-sm text-apex-muted">Esta información fue compartida por la persona que creó el QR.</p></Card>; }
