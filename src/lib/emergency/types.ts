export type BloodType = '' | 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';

export type PersonInfo = { alias: string; name: string; phone: string };
export type MedicalInfo = { blood: BloodType; allergies: string; medical: string; notes: string };
export type EmergencyContact = { contact: string };
export type MotorcycleInfo = { bike: string; plate: string; color: string; policy: string; extra: string };
export type QRSettings = { baseUrl: string };

export type EmergencyProfile = QRSettings & PersonInfo & MedicalInfo & EmergencyContact & MotorcycleInfo;

export type CompressedEmergencyPayload = {
  v: 1;
  p: { u: string; n: string; t: string; b: string; e: string; a: string; c: string; x: string };
  m: { d: string; l: string; k: string; s: string; z: string };
};
