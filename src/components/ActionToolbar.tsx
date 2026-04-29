import { Copy, Download, Printer, RotateCcw, Save } from 'lucide-react';

type ActionToolbarProps = {
  onCopyLink: () => void;
  onDownloadQr: () => void;
  onDownloadSticker: () => void;
  onPrint: () => void;
  onClear: () => void;
};

export function ActionToolbar({ onCopyLink, onDownloadQr, onDownloadSticker, onPrint, onClear }: ActionToolbarProps) {
  return (
    <div className="no-print grid gap-2 sm:grid-cols-2">
      <button className="premium-button bg-apex-blue text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5" type="button" onClick={onCopyLink}>
        <Copy className="size-4" /> Copy link
      </button>
      <button className="premium-button border border-apex-border bg-white text-apex-ink shadow-soft hover:-translate-y-0.5" type="button" onClick={onDownloadQr}>
        <Download className="size-4" /> Download QR
      </button>
      <button className="premium-button border border-apex-border bg-white text-apex-ink shadow-soft hover:-translate-y-0.5" type="button" onClick={onDownloadSticker}>
        <Save className="size-4" /> Sticker PNG
      </button>
      <button className="premium-button border border-apex-border bg-white text-apex-ink shadow-soft hover:-translate-y-0.5" type="button" onClick={onPrint}>
        <Printer className="size-4" /> Print
      </button>
      <button className="premium-button border border-red-200 bg-red-50 text-red-700 hover:-translate-y-0.5 sm:col-span-2" type="button" onClick={onClear}>
        <RotateCcw className="size-4" /> Clear form
      </button>
    </div>
  );
}
