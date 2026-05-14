import { SectionHeader } from '@/components/shared/SectionHeader';
import { EmergencySignalRail } from '@/components/landing/EmergencySignalRail';

export function BenefitsSection() {
  return (
    <section className="apex-container py-20">
      <SectionHeader
        eyebrow="Beneficios"
        title="Diseñado para segundos críticos, no para verse lindo en Dribbble."
        description="Premium no significa decorado: significa claro, confiable y mantenible."
      />
      <div className="mt-10">
        <EmergencySignalRail />
      </div>
    </section>
  );
}
