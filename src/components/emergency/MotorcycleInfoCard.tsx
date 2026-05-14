import { Card } from '@/components/shared/Card';
import type { EmergencyProfile } from '@/lib/emergency/types';
function Row({ l, v }: { l: string; v?: string }) { return <div><dt className="text-xs font-black uppercase tracking-[.14em] text-apex-muted">{l}</dt><dd className="mt-1 text-base font-bold text-white">{v || '—'}</dd></div>; }
export function MotorcycleInfoCard({ profile }: { profile: EmergencyProfile }) { return <Card className="p-5"><h2 className="text-xl font-black">Moto y seguro</h2><dl className="mt-4 grid gap-4 sm:grid-cols-2"><Row l="Moto" v={profile.bike} /><Row l="Placas" v={profile.plate} /><Row l="Color" v={profile.color} /><Row l="Póliza" v={profile.policy} /><Row l="Extra" v={profile.extra} /></dl></Card>; }
