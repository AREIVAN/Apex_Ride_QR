'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonSection, MedicalSection, EmergencyContactSection, MotorcycleSection, QRSettingsSection } from './FormFields';
import type { EmergencyProfile } from '@/lib/emergency/types';
import { emergencyProfileSchema, type EmergencyProfileInput } from '@/lib/emergency/schema';

export function EmergencyForm({ profile, onChange }: { profile: EmergencyProfile; onChange: (profile: EmergencyProfile) => void }) {
  const form = useForm<EmergencyProfileInput>({ resolver: zodResolver(emergencyProfileSchema), mode: 'onChange', values: profile });
  useEffect(() => {
    const subscription = form.watch((values) => onChange(values as EmergencyProfile));
    return () => subscription.unsubscribe();
  }, [form, onChange]);
  return <form className="grid gap-5" aria-label="Creador de QR de emergencia"><div><p className="text-xs font-black uppercase tracking-[.18em] text-apex-cyan">Creador avanzado</p><h1 className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-5xl">Construí tu QR de emergencia como un producto serio.</h1><p className="mt-3 max-w-2xl text-apex-muted">Datos claros, vCard offline, link online comprimido y sticker listo para casco, moto o cartera.</p></div><PersonSection register={form.register} errors={form.formState.errors} /><MedicalSection register={form.register} errors={form.formState.errors} /><EmergencyContactSection register={form.register} errors={form.formState.errors} /><MotorcycleSection register={form.register} errors={form.formState.errors} /><QRSettingsSection /></form>;
}
