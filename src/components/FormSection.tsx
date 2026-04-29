import type { ReactNode } from 'react';

type FormSectionProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
};

export function FormSection({ title, eyebrow, children }: FormSectionProps) {
  return (
    <section className="premium-card p-5 transition duration-200 ease-premium hover:-translate-y-0.5 hover:shadow-premium">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-base font-black tracking-tight text-apex-ink">{title}</h3>
        <span className="text-right text-xs font-bold text-apex-muted">{eyebrow}</span>
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
