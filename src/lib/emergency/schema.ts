import { z } from 'zod';

export const bloodTypes = ['', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'] as const;

export const emergencyProfileSchema = z.object({
  baseUrl: z.string().url('Usá una URL válida para alojar la vista online.').or(z.literal('')),
  alias: z.string().max(60, 'Máximo 60 caracteres.'),
  name: z.string().max(100, 'Máximo 100 caracteres.'),
  phone: z.string().max(40, 'Máximo 40 caracteres.'),
  contact: z.string().max(140, 'Máximo 140 caracteres.'),
  blood: z.enum(bloodTypes),
  allergies: z.string().max(180, 'Máximo 180 caracteres.'),
  medical: z.string().max(180, 'Máximo 180 caracteres.'),
  notes: z.string().max(320, 'Máximo 320 caracteres.'),
  bike: z.string().max(120, 'Máximo 120 caracteres.'),
  plate: z.string().max(40, 'Máximo 40 caracteres.'),
  color: z.string().max(60, 'Máximo 60 caracteres.'),
  policy: z.string().max(120, 'Máximo 120 caracteres.'),
  extra: z.string().max(160, 'Máximo 160 caracteres.'),
}).refine((data) => Boolean(data.alias || data.name || data.phone || data.contact || data.bike || data.plate), {
  message: 'Cargá al menos un dato identificable antes de generar el QR.',
  path: ['alias'],
});

export type EmergencyProfileInput = z.infer<typeof emergencyProfileSchema>;
