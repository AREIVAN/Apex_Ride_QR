import { twMerge } from 'tailwind-merge';
import type { HTMLAttributes } from 'react';
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={twMerge('glass-card rounded-4xl', className)} {...props} />; }
