import { create } from 'zustand';
import type { EmergencyProfile } from '@/lib/emergency/types';

export const emptyProfile: EmergencyProfile = { baseUrl: '', alias: '', name: '', phone: '', contact: '', blood: '', allergies: '', medical: '', notes: '', bike: '', plate: '', color: '', policy: '', extra: '' };

type EmergencyProfileStore = {
  profile: EmergencyProfile;
  setProfile: (profile: EmergencyProfile) => void;
  updateProfile: (patch: Partial<EmergencyProfile>) => void;
  resetProfile: (baseUrl?: string) => void;
};

export const useEmergencyProfileStore = create<EmergencyProfileStore>((set) => ({
  profile: emptyProfile,
  setProfile: (profile) => set({ profile }),
  updateProfile: (patch) => set((state) => ({ profile: { ...state.profile, ...patch } })),
  resetProfile: (baseUrl = '') => set({ profile: { ...emptyProfile, baseUrl } }),
}));
