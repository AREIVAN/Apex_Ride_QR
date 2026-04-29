export function getEmergencyLink(): string {
  if (typeof window === 'undefined') return '/Apex_Ride_QR/#emergency-card';

  const base = new URL(import.meta.env.BASE_URL, window.location.origin);
  base.hash = 'emergency-card';
  return base.toString();
}
