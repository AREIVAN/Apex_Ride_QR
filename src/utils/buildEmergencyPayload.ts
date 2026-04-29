import type { SafetyCardProfile } from '../types/safety-card';

const empty = (value: string) => value.trim() || '—';

export function buildEmergencyPayload(profile: SafetyCardProfile, emergencyLink: string): string {
  return [
    'APEX RIDE SAFETY CARD',
    `Rider: ${empty(profile.riderName)}`,
    `Personal Phone: ${empty(profile.personalPhone)}`,
    `Emergency Contact: ${empty(profile.emergencyContact)}`,
    `Emergency Phone: ${empty(profile.emergencyPhone)}`,
    `Blood Type: ${empty(profile.bloodType)}`,
    `Allergies: ${empty(profile.allergies)}`,
    `Medical Conditions: ${empty(profile.medicalConditions)}`,
    `Medications: ${empty(profile.medications)}`,
    `Motorcycle: ${empty(profile.motorcycle)}`,
    `Plate: ${empty(profile.plate)}`,
    `Insurance: ${empty(profile.insurance)}`,
    `Policy: ${empty(profile.policy)}`,
    `Notes: ${empty(profile.notes)}`,
    `Emergency Link: ${emergencyLink}`,
  ].join('\n');
}
