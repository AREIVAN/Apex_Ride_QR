export type SafetyCardProfile = {
  riderName: string;
  personalPhone: string;
  emergencyContact: string;
  emergencyPhone: string;
  bloodType: string;
  allergies: string;
  medicalConditions: string;
  medications: string;
  motorcycle: string;
  plate: string;
  insurance: string;
  policy: string;
  notes: string;
};

export type SafetyCardField = keyof SafetyCardProfile;
