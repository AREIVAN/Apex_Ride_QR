'use client';
import { Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
export function CopyButton({ text, label = 'Copiar' }: { text: string; label?: string }) { const { copy, copied } = useCopyToClipboard(); return <Button type="button" variant="secondary" onClick={() => void copy(text)}>{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? 'Copiado' : label}</Button>; }
