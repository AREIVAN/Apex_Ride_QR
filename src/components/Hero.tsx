import { ArrowRight, CheckCircle2, QrCode } from 'lucide-react';

const trustPills = ['No account required', 'Stored locally', 'Printable sticker ready'];

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-apex-border bg-white/80 px-3 py-2 text-sm font-black text-apex-blueDark shadow-soft">
          <span className="size-2 rounded-full bg-apex-safety shadow-[0_0_0_7px_rgba(16,185,129,0.12)]" />
          Apex Ride Safety Card
        </div>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.93] tracking-[-0.075em] text-apex-ink sm:text-7xl lg:text-8xl">
          Emergency QR for every ride.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-apex-muted sm:text-xl">
          Create a scannable emergency card for your motorcycle, helmet or jacket. Share critical rider, medical and insurance information when it matters most.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="premium-button bg-gradient-to-br from-apex-blue to-apex-blueDark text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5" href="#builder">
            Create Safety Card <ArrowRight className="size-4" />
          </a>
          <a className="premium-button border border-apex-border bg-white text-apex-ink shadow-soft hover:-translate-y-0.5" href="#qr-preview">
            Preview QR
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {trustPills.map((pill) => (
            <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-apex-border bg-white/80 px-3 py-2 text-sm font-bold text-apex-muted">
              <CheckCircle2 className="size-4 text-apex-safety" /> {pill}
            </span>
          ))}
        </div>
      </div>

      <aside className="premium-card relative overflow-hidden p-5 lg:p-6">
        <div className="absolute -right-16 -top-16 size-64 rounded-full bg-apex-blue/10" />
        <div className="relative rounded-[1.5rem] bg-gradient-to-br from-apex-ink to-slate-800 p-5 text-white shadow-premium">
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>Live emergency profile</span>
            <span className="text-apex-safety">Ready</span>
          </div>
          <div className="mt-12 grid gap-4">
            {[
              ['Rider', 'Apex Rider'],
              ['Blood type', 'O+'],
              ['Emergency contact', 'One tap away'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-white/55">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-5 grid grid-cols-[1fr_0.7fr_0.45fr] gap-2">
          <span className="h-2 rounded-full bg-gradient-to-r from-apex-blue to-apex-safety" />
          <span className="h-2 rounded-full bg-gradient-to-r from-apex-blue to-apex-safety opacity-70" />
          <span className="h-2 rounded-full bg-gradient-to-r from-apex-blue to-apex-safety opacity-50" />
        </div>
        <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-apex-border bg-white p-4 text-apex-ink">
          <QrCode className="size-10 text-apex-blue" />
          <div>
            <strong className="block text-sm">Built for emergency visibility</strong>
            <span className="text-sm text-apex-muted">Readable payload, printable sticker, local-first MVP.</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
