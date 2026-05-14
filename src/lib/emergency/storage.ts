import type { EmergencyProfile } from './types';

export const STORAGE_KEY = 'apex_emergency_profile_v3';

export function saveProfileToLocalStorage(profile: EmergencyProfile): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function loadProfileFromLocalStorage(): EmergencyProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as EmergencyProfile) : null;
  } catch { return null; }
}

export function clearProfileFromLocalStorage(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}
