import LZString from 'lz-string';
import type { CompressedEmergencyPayload, EmergencyProfile } from './types';

export function toCompressedPayload(profile: EmergencyProfile): CompressedEmergencyPayload {
  return {
    v: 1,
    p: { u: profile.alias || '', n: profile.name || '', t: profile.phone || '', b: profile.blood || '', e: profile.contact || '', a: profile.allergies || '', c: profile.medical || '', x: profile.notes || '' },
    m: { d: profile.bike || '', l: profile.plate || '', k: profile.color || '', s: profile.policy || '', z: profile.extra || '' },
  };
}

export function encodeEmergencyProfile(profile: EmergencyProfile): string {
  return LZString.compressToEncodedURIComponent(JSON.stringify(toCompressedPayload(profile)));
}

export function decodeEmergencyProfile(encoded: string): CompressedEmergencyPayload | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    const parsed = JSON.parse(json) as Partial<CompressedEmergencyPayload>;
    if (parsed.v !== 1 || !parsed.p || !parsed.m) return null;
    return parsed as CompressedEmergencyPayload;
  } catch {
    return null;
  }
}

export function buildEmergencyLink(profile: EmergencyProfile, fallbackOrigin?: string): string {
  const base = (profile.baseUrl || fallbackOrigin || '').trim();
  const cleanBase = base.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/$/, '');
  return `${cleanBase}/emergencia#e=${encodeEmergencyProfile(profile)}`;
}

export function payloadToProfile(data: CompressedEmergencyPayload): EmergencyProfile {
  return { baseUrl: '', alias: data.p.u || '', name: data.p.n || '', phone: data.p.t || '', blood: (data.p.b || '') as EmergencyProfile['blood'], contact: data.p.e || '', allergies: data.p.a || '', medical: data.p.c || '', notes: data.p.x || '', bike: data.m.d || '', plate: data.m.l || '', color: data.m.k || '', policy: data.m.s || '', extra: data.m.z || '' };
}
