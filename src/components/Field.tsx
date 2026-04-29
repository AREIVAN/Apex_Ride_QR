import type { ChangeEvent } from 'react';
import type { SafetyCardField, SafetyCardProfile } from '../types/safety-card';

type FieldProps = {
  label: string;
  field: SafetyCardField;
  value: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  options?: string[];
  onChange: (field: SafetyCardField, value: string) => void;
};

export function Field({ label, field, value, placeholder, type = 'text', multiline, options, onChange }: FieldProps) {
  const inputId = `field-${field}`;
  const commonProps = {
    id: inputId,
    name: field,
    value,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(field, event.target.value),
    className: 'input-shell',
  };

  return (
    <label htmlFor={inputId} className="grid gap-2 text-sm font-extrabold text-apex-graphite">
      {label}
      {options ? (
        <select {...commonProps}>
          <option value="">Select blood type</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : multiline ? (
        <textarea {...commonProps} placeholder={placeholder} rows={4} />
      ) : (
        <input {...commonProps} type={type} placeholder={placeholder} />
      )}
    </label>
  );
}

export type FieldConfig = {
  label: string;
  field: SafetyCardField;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  options?: SafetyCardProfile['bloodType'][];
};
