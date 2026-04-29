import { forwardRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link2 } from 'lucide-react';
import { ActionToolbar } from './ActionToolbar';

type QRPreviewProps = {
  payload: string;
  emergencyLink: string;
  onCopyLink: () => void;
  onDownloadQr: () => void;
  onDownloadSticker: () => void;
  onPrint: () => void;
  onClear: () => void;
};

export const QRPreview = forwardRef<HTMLDivElement, QRPreviewProps>(function QRPreview(
  { payload, emergencyLink, onCopyLink, onDownloadQr, onDownloadSticker, onPrint, onClear },
  ref,
) {
  return (
    <section id="qr-preview" className="premium-card p-5" aria-label="QR preview">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-apex-blueDark">QR generator</p>
          <h3 className="mt-1 text-xl font-black tracking-tight text-apex-ink">Scannable emergency payload</h3>
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">Live</span>
      </div>

      <div ref={ref} className="grid min-h-64 place-items-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-5">
        <div className="rounded-[1.25rem] bg-white p-3 shadow-soft">
          <QRCodeSVG value={payload} size={210} level="M" fgColor="#111827" bgColor="#ffffff" />
        </div>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-extrabold text-apex-graphite">
        Public emergency link
        <span className="flex items-center gap-2 rounded-2xl border border-apex-border bg-slate-50 px-4 py-3 text-xs font-bold text-apex-muted">
          <Link2 className="size-4 shrink-0 text-apex-blue" />
          <span className="truncate">{emergencyLink}</span>
        </span>
      </label>

      <div className="mt-5">
        <ActionToolbar
          onCopyLink={onCopyLink}
          onDownloadQr={onDownloadQr}
          onDownloadSticker={onDownloadSticker}
          onPrint={onPrint}
          onClear={onClear}
        />
      </div>
    </section>
  );
});
