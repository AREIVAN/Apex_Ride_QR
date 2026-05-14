import type { EmergencyProfile } from './types';

const clean = (value: string) => value.replace(/[\n\r]/g, ' ').trim();

export function buildVCard(profile: EmergencyProfile, link: string): string {
  const fnValue = clean(profile.alias || profile.name || 'SIN CONFIGURAR');
  const tel = clean(profile.phone || '');
  const parts = [
    'ICE',
    profile.blood ? `Sangre:${clean(profile.blood)}` : '',
    profile.allergies ? `Alergias:${clean(profile.allergies)}` : '',
    profile.medical ? `Cond:${clean(profile.medical)}` : '',
    profile.contact ? `Contacto:${clean(profile.contact)}` : '',
    profile.bike ? `Moto:${clean(profile.bike)}` : '',
    profile.plate ? `Placas:${clean(profile.plate)}` : '',
    profile.color ? `Color:${clean(profile.color)}` : '',
    profile.policy ? `Poliza:${clean(profile.policy)}` : '',
    profile.extra ? `Extra:${clean(profile.extra)}` : '',
    profile.notes ? `Notas:${clean(profile.notes)}` : '',
    link ? `Link:${clean(link)}` : '',
  ].filter(Boolean);
  return ['BEGIN:VCARD', 'VERSION:3.0', `FN:${fnValue}`, tel ? `TEL;TYPE=CELL:${tel}` : '', `NOTE:${parts.join(' | ')}`, 'END:VCARD'].filter(Boolean).join('\n');
}
