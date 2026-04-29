import { useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { SafetyForm } from './components/SafetyForm';
import { SafetyCardPreview } from './components/SafetyCardPreview';
import { QRPreview } from './components/QRPreview';
import { StickerPreview } from './components/StickerPreview';
import { Footer } from './components/Footer';
import { useSafetyCard } from './hooks/useSafetyCard';
import { downloadElementAsPng } from './utils/downloadImage';

export default function App() {
  const { profile, updateField, clearProfile, emergencyLink, emergencyPayload } = useSafetyCard();
  const qrRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState('');

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(emergencyLink);
      showToast('Emergency link copied');
    } catch {
      showToast('Could not copy link');
    }
  }

  async function downloadQr() {
    try {
      await downloadElementAsPng(qrRef.current, 'apex-ride-emergency-qr.png');
      showToast('QR downloaded');
    } catch {
      showToast('Could not download QR');
    }
  }

  async function downloadSticker() {
    try {
      await downloadElementAsPng(stickerRef.current, 'apex-ride-safety-sticker.png');
      showToast('Sticker downloaded');
    } catch {
      showToast('Could not download sticker');
    }
  }

  function printPage() {
    window.print();
  }

  function clear() {
    clearProfile();
    showToast('Form cleared');
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />

        <section id="builder" className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <SafetyForm profile={profile} onChange={updateField} />
          <aside className="grid gap-4 lg:sticky lg:top-24">
            <SafetyCardPreview profile={profile} />
            <QRPreview
              ref={qrRef}
              payload={emergencyPayload}
              emergencyLink={emergencyLink}
              onCopyLink={copyLink}
              onDownloadQr={downloadQr}
              onDownloadSticker={downloadSticker}
              onPrint={printPage}
              onClear={clear}
            />
          </aside>
        </section>

        <StickerPreview ref={stickerRef} profile={profile} payload={emergencyPayload} />
      </main>
      <Footer />
      <div
        className={`fixed bottom-5 right-5 z-50 rounded-2xl bg-apex-ink px-4 py-3 text-sm font-extrabold text-white shadow-premium transition duration-200 ease-premium ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}
