import { ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="no-print sticky top-4 z-30 mx-auto mt-4 flex max-w-7xl items-center justify-between gap-4 rounded-full border border-apex-border/90 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl">
      <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Apex Ride Safety home">
        <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-apex-graphite to-apex-blue text-sm font-black text-white shadow-lg shadow-blue-600/20">
          <ShieldCheck className="size-5" />
        </span>
        <span className="min-w-0">
          <strong className="block truncate text-sm font-black tracking-tight text-apex-ink sm:text-base">Apex Ride Safety</strong>
          <small className="hidden text-xs font-semibold text-apex-muted sm:block">Emergency visibility for riders</small>
        </span>
      </a>

      <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
        <a className="rounded-full px-4 py-2 text-sm font-bold text-apex-muted transition hover:bg-slate-100 hover:text-apex-ink" href="#builder">
          Create Card
        </a>
        <a className="rounded-full px-4 py-2 text-sm font-bold text-apex-muted transition hover:bg-slate-100 hover:text-apex-ink" href="#sticker">
          Preview Sticker
        </a>
        <a className="rounded-full bg-apex-ink px-4 py-2 text-sm font-extrabold text-white transition hover:-translate-y-0.5" href="#builder">
          Start now
        </a>
      </nav>
    </header>
  );
}
