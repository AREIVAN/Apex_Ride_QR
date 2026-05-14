import type { EmergencyProfile } from './types';

export function buildEmergencySummary(profile: EmergencyProfile): string {
  const who = profile.alias || profile.name || 'SIN DATOS';
  return [
    `EMERGENCIA | ${who}`,
    profile.phone ? `Tel: ${profile.phone}` : '',
    profile.blood ? `Sangre: ${profile.blood}` : '',
    profile.allergies ? `Alergias: ${profile.allergies}` : '',
    profile.medical ? `Condiciones: ${profile.medical}` : '',
    profile.contact ? `Contacto: ${profile.contact}` : '',
    profile.bike ? `Moto: ${profile.bike}` : '',
    profile.plate ? `Placas: ${profile.plate}` : '',
    profile.policy ? `Póliza: ${profile.policy}` : '',
    profile.notes ? `Notas: ${profile.notes}` : '',
  ].filter(Boolean).join('\n');
}
