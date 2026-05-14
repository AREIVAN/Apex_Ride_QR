import { SectionHeader } from '@/components/shared/SectionHeader';
import { QRCreationFlow } from '@/components/landing/QRCreationFlow';

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="apex-container py-20">
      <SectionHeader eyebrow="Flujo" title="Cuatro pasos. Cero backend. Cero humo." />
      <div className="mt-10">
        <QRCreationFlow />
      </div>
    </section>
  );
}
