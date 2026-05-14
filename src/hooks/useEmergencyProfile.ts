'use client';
import { useEffect, useMemo } from 'react';
import { useEmergencyProfileStore, emptyProfile } from '@/store/emergency-profile-store';
import { buildQrPayload } from '@/lib/emergency/qr';
import { loadProfileFromLocalStorage, saveProfileToLocalStorage, clearProfileFromLocalStorage } from '@/lib/emergency/storage';

function defaultBaseUrl() {
  if (typeof window === 'undefined') return '';
  return `${window.location.origin}`;
}

export function useEmergencyProfile() {
  const { profile, setProfile, updateProfile, resetProfile } = useEmergencyProfileStore();
  useEffect(() => { if (!profile.baseUrl) updateProfile({ baseUrl: defaultBaseUrl() }); }, [profile.baseUrl, updateProfile]);
  const payload = useMemo(() => buildQrPayload(profile, defaultBaseUrl()), [profile]);
  return {
    profile,
    payload,
    setProfile,
    updateProfile,
    save: () => saveProfileToLocalStorage(profile),
    load: () => { const loaded = loadProfileFromLocalStorage(); if (loaded) setProfile({ ...emptyProfile, ...loaded, baseUrl: loaded.baseUrl || defaultBaseUrl() }); return loaded; },
    clear: () => { clearProfileFromLocalStorage(); resetProfile(defaultBaseUrl()); },
  };
}
