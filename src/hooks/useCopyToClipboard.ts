'use client';
import { useState } from 'react';

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  async function copy(text?: string) {
    if (!text || text === '—') return false;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
      return true;
    } catch { return false; }
  }
  return { copy, copied };
}
