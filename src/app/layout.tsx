import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: { default: 'APEX Emergency QR — QR de emergencia para motociclistas', template: '%s | APEX Emergency QR' },
  description: 'Genera un QR con vCard offline y vista online comprimida para datos médicos, contacto de emergencia y datos de moto.',
  openGraph: { title: 'APEX Emergency QR', description: 'Información de emergencia para riders: offline como vCard y online cuando hay internet.', type: 'website', locale: 'es_MX' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#050711' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body><GradientBackground /><SiteHeader />{children}<SiteFooter /></body></html>; }
