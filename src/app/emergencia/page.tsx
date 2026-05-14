import type { Metadata } from 'next';
import { EmergencyViewer } from '@/components/emergency/EmergencyViewer';
export const metadata: Metadata = { title: 'Vista de emergencia' };
export default function EmergenciaPage() { return <EmergencyViewer />; }
