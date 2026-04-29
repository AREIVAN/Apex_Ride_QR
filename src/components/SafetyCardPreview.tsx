import type { ReactNode } from 'react';
import { Bike, HeartPulse, PhoneCall } from 'lucide-react';
import type { SafetyCardProfile } from '../types/safety-card';

type SafetyCardPreviewProps = {
  profile: SafetyCardProfile;
};

const display = (value: string, fallback: string) => value.trim() || fallback;

export function SafetyCardPreview({ profile }: SafetyCardPreviewProps) {
  const rider = display(profile.riderName, 'Rider alias');
  const motorcycle = [profile.motorcycle, profile.plate].filter(Boolean).join(' · ') || 'Add motorcycle';
  const contact = [profile.emergencyContact, profile.emergencyPhone].filter(Boolean).join(' · ') || 'Add emergency contact';

  return (
    <section className="premium-card bg-gradient-to-br from-white to-blue-50/60 p-5" aria-label="Safety card preview">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-apex-blueDark">Safety Card Preview</p>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-apex-muted">Rider</span>
          <h2 className="mt-1 text-3xl font-black tracking-[-0.055em] text-apex-ink">{rider}</h2>
        </div>
        <div className="grid min-h-14 min-w-16 place-items-center rounded-2xl border border-red-200 bg-red-50 px-3 text-xl font-black text-red-700">
          {profile.bloodType || '—'}
        </div>
      </div>

      <dl className="mt-6 grid gap-3">
        <PreviewRow icon={<Bike className="size-4" />} label="Motorcycle" value={motorcycle} />
        <PreviewRow icon={<PhoneCall className="size-4" />} label="Emergency contact" value={contact} />
        <PreviewRow icon={<HeartPulse className="size-4" />} label="Allergies" value={display(profile.allergies, 'None provided')} />
        <PreviewRow icon={<HeartPulse className="size-4" />} label="Medical conditions" value={display(profile.medicalConditions, 'None provided')} />
      </dl>

      <div className="mt-5 flex items-center justify-between gap-4 text-xs font-bold text-apex-muted">
        <span>Designed for emergency visibility</span>
        <strong className="text-apex-ink">ID: {rider.replace(/\s+/g, '-').toUpperCase().slice(0, 18)}</strong>
      </div>
    </section>
  );
}

function PreviewRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1rem_7.25rem_1fr] items-start gap-3 rounded-2xl border border-apex-border bg-white/75 p-3">
      <span className="mt-0.5 text-apex-blue">{icon}</span>
      <dt className="text-xs font-black text-apex-muted">{label}</dt>
      <dd className="m-0 break-words text-sm font-extrabold text-apex-ink">{value}</dd>
    </div>
  );
}
