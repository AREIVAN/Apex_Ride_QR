'use client';
import { useCallback, useEffect } from 'react';
import { EmergencyForm } from './EmergencyForm';
import { QRPreviewPanel } from './QRPreviewPanel';
import { useEmergencyProfile } from '@/hooks/useEmergencyProfile';
import type { EmergencyProfile } from '@/lib/emergency/types';

export function CreatorShell() {
  const { profile, payload, setProfile, save, load, clear } = useEmergencyProfile();
  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const onChange = useCallback((next: EmergencyProfile) => setProfile(next), [setProfile]);
  return <main className="apex-container py-10"><div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.75fr)]"><EmergencyForm profile={profile} onChange={onChange} /><QRPreviewPanel profile={profile} link={payload.link} vcard={payload.vcard} onSave={save} onLoad={load} onClear={clear} /></div></main>;
}
