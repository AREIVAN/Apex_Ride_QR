'use client';
import { useCallback } from 'react';
import { exportStickerAsPng } from '@/lib/emergency/export-sticker';

export function useStickerExport(ref: React.RefObject<HTMLElement>) {
  return useCallback(async () => {
    if (!ref.current) return;
    await exportStickerAsPng(ref.current);
  }, [ref]);
}
