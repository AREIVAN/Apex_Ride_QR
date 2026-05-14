import type { EmergencyProfile } from './types';
import { buildEmergencyLink } from './compression';
import { buildVCard } from './vcard';

export function buildQrPayload(profile: EmergencyProfile, fallbackOrigin?: string) {
  const link = buildEmergencyLink(profile, fallbackOrigin);
  const vcard = buildVCard(profile, link);
  return { link, vcard };
}
