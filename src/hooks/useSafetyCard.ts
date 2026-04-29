import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { SafetyCardField, SafetyCardProfile } from '../types/safety-card';
import { buildEmergencyPayload } from '../utils/buildEmergencyPayload';
import { getEmergencyLink } from '../utils/emergencyLink';

const STORAGE_KEY = 'apex_ride_safety_card_v2';

export const emptyProfile: SafetyCardProfile = {
  riderName: '',
  personalPhone: '',
  emergencyContact: '',
  emergencyPhone: '',
  bloodType: '',
  allergies: '',
  medicalConditions: '',
  medications: '',
  motorcycle: '',
  plate: '',
  insurance: '',
  policy: '',
  notes: '',
};

export function useSafetyCard() {
  const [profile, setProfile] = useLocalStorage<SafetyCardProfile>(STORAGE_KEY, emptyProfile);
  const emergencyLink = useMemo(() => getEmergencyLink(), []);
  const emergencyPayload = useMemo(
    () => buildEmergencyPayload(profile, emergencyLink),
    [profile, emergencyLink],
  );

  function updateField(field: SafetyCardField, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function clearProfile() {
    setProfile(emptyProfile);
  }

  return { profile, updateField, clearProfile, emergencyLink, emergencyPayload };
}
