import { Badge } from './Badge';
export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><Badge>{eyebrow}</Badge><h2 className="mt-5 text-3xl font-black tracking-[-.05em] text-white sm:text-5xl">{title}</h2>{description ? <p className="mt-4 text-lg leading-8 text-apex-muted">{description}</p> : null}</div>;
}
