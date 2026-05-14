'use client';
import { Copy, Download, Printer, RotateCcw, Save, FolderOpen, Check } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useStickerExport } from '@/hooks/useStickerExport';

export function CreatorActions({ link, vcard, stickerRef, onSave, onLoad, onClear }: { link: string; vcard: string; stickerRef: React.RefObject<HTMLElement>; onSave: () => void; onLoad: () => void; onClear: () => void }) {
  const { copy, copied } = useCopyToClipboard();
  const exportSticker = useStickerExport(stickerRef);
  return <div className="no-print mt-5 grid gap-2 sm:grid-cols-2"><Button type="button" onClick={onSave}><Save className="size-4" />Guardar</Button><Button type="button" variant="secondary" onClick={onLoad}><FolderOpen className="size-4" />Cargar</Button><Button type="button" variant="secondary" onClick={() => void exportSticker()}><Download className="size-4" />PNG</Button><Button type="button" variant="secondary" onClick={() => window.print()}><Printer className="size-4" />Imprimir</Button><Button type="button" variant="secondary" onClick={() => void copy(link)}>{copied ? <Check className="size-4" /> : <Copy className="size-4" />}Copiar link</Button><Button type="button" variant="secondary" onClick={() => void copy(vcard)}><Copy className="size-4" />Copiar vCard</Button><Button type="button" variant="danger" className="sm:col-span-2" onClick={onClear}><RotateCcw className="size-4" />Limpiar</Button></div>;
}
