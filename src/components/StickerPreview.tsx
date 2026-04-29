import { forwardRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import type { SafetyCardProfile } from '../types/safety-card';

type StickerPreviewProps = {
  profile: SafetyCardProfile;
  payload: string;
};

export const StickerPreview = forwardRef<HTMLDivElement, StickerPreviewProps>(function StickerPreview({ profile, payload }, ref) {
  const rider = profile.riderName.trim() || 'Rider alias';

  return (
    <section id="sticker" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-apex-blueDark">Sticker Preview</p>
        <h2 className="mt-2 text-3xl font-black leading-tight tracking-[-0.055em] text-apex-ink sm:text-5xl">
          Printable, visible, and intentionally minimal.
        </h2>
      </div>

      <div className="mt-8 grid items-center gap-6 lg:grid-cols-[0.9fr_1fr]">
        <div className="premium-card grid place-items-center bg-gradient-to-br from-white to-slate-50 p-7">
          <div ref={ref} className="grid aspect-[0.78] w-full max-w-[360px] place-items-center content-center gap-4 rounded-[1.75rem] border-2 border-apex-ink bg-white p-6 text-center text-apex-ink shadow-premium">
            <div className="text-xs font-black uppercase tracking-[0.16em] text-apex-blueDark">Apex Ride Safety Card</div>
            <div className="w-full rounded-full bg-apex-ink px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white">
              Scan in case of emergency
            </div>
            <div className="rounded-[1.25rem] bg-white p-2">
              <QRCodeSVG value={payload} size={190} level="M" fgColor="#111827" bgColor="#ffffff" />
            </div>
            <strong className="break-words text-2xl font-black uppercase tracking-[-0.04em]">{rider}</strong>
            <span className="text-xs font-extrabold text-apex-muted">Helmet · Motorcycle · Jacket</span>
          </div>
        </div>

        <div className="premium-card p-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-apex-border bg-white px-3 py-2 text-sm font-bold text-apex-muted">
            <span className="size-2 rounded-full bg-apex-safety" /> Printable sticker ready
          </span>
          <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.055em] text-apex-ink sm:text-5xl">
            Export a clean PNG or print directly.
          </h3>
          <p className="mt-4 text-lg leading-8 text-apex-muted">
            The sticker is high-contrast, centered around the QR, and keeps the emergency message readable at small sizes.
          </p>
        </div>
      </div>
    </section>
  );
});
