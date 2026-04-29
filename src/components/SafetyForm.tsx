import { Field } from './Field';
import { FormSection } from './FormSection';
import type { SafetyCardField, SafetyCardProfile } from '../types/safety-card';

type SafetyFormProps = {
  profile: SafetyCardProfile;
  onChange: (field: SafetyCardField, value: string) => void;
};

const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'Unknown'];

export function SafetyForm({ profile, onChange }: SafetyFormProps) {
  return (
    <form className="grid gap-4" aria-label="Safety card form">
      <div className="mb-2">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-apex-blueDark">Safety profile builder</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight tracking-[-0.055em] text-apex-ink sm:text-4xl">
          Critical info, organized like a product — not a spreadsheet.
        </h2>
      </div>

      <FormSection title="Rider information" eyebrow="Public identity">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Rider name / alias" field="riderName" value={profile.riderName} placeholder="e.g. Apex Rider" onChange={onChange} />
          <Field label="Personal phone optional" field="personalPhone" value={profile.personalPhone} placeholder="e.g. +1 555 010 2400" type="tel" onChange={onChange} />
        </div>
      </FormSection>

      <FormSection title="Emergency contact" eyebrow="Call first">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Emergency contact" field="emergencyContact" value={profile.emergencyContact} placeholder="e.g. Alex Morgan" onChange={onChange} />
          <Field label="Emergency phone" field="emergencyPhone" value={profile.emergencyPhone} placeholder="e.g. +1 555 018 9110" type="tel" onChange={onChange} />
        </div>
      </FormSection>

      <FormSection title="Medical information" eyebrow="Keep concise">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Blood type" field="bloodType" value={profile.bloodType} options={bloodTypes} onChange={onChange} />
          <Field label="Medications" field="medications" value={profile.medications} placeholder="e.g. Insulin, anticoagulants" onChange={onChange} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Allergies" field="allergies" value={profile.allergies} placeholder="e.g. Penicillin, shellfish" onChange={onChange} />
          <Field label="Medical conditions" field="medicalConditions" value={profile.medicalConditions} placeholder="e.g. Asthma, diabetes" onChange={onChange} />
        </div>
      </FormSection>

      <FormSection title="Motorcycle information" eyebrow="Identify the ride">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Motorcycle" field="motorcycle" value={profile.motorcycle} placeholder="e.g. Yamaha MT-09" onChange={onChange} />
          <Field label="Plate" field="plate" value={profile.plate} placeholder="e.g. ABC-1234" onChange={onChange} />
        </div>
      </FormSection>

      <FormSection title="Insurance information" eyebrow="After first response">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Insurance provider" field="insurance" value={profile.insurance} placeholder="e.g. Progressive" onChange={onChange} />
          <Field label="Policy number" field="policy" value={profile.policy} placeholder="e.g. POL-2048-91" onChange={onChange} />
        </div>
      </FormSection>

      <FormSection title="Emergency notes" eyebrow="Responder context">
        <Field label="Notes" field="notes" value={profile.notes} placeholder="e.g. If unconscious, call emergency contact before moving personal items." multiline onChange={onChange} />
      </FormSection>
    </form>
  );
}
