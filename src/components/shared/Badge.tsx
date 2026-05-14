import { twMerge } from 'tailwind-merge';
import type { HTMLAttributes } from 'react';
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={twMerge('inline-flex items-center gap-2 rounded-full border border-apex-cyan/25 bg-apex-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-apex-cyan', className)} {...props} />; }
