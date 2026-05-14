import type { Metadata } from 'next';
import { CreatorShell } from '@/components/creator/CreatorShell';
export const metadata: Metadata = { title: 'Crear QR de emergencia' };
export default function CrearPage() { return <CreatorShell />; }
