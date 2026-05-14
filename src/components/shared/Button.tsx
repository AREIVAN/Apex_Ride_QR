import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'danger'; href?: string; children: ReactNode };
const variants = { primary: 'bg-gradient-to-r from-apex-violet to-apex-cyan text-white shadow-glow hover:-translate-y-0.5', secondary: 'border border-white/10 bg-white/[.07] text-apex-text hover:bg-white/[.11]', danger: 'border border-apex-danger/30 bg-apex-danger/10 text-red-100 hover:bg-apex-danger/15' };
export function Button({ variant = 'primary', href, className, children, ...props }: ButtonProps) {
  const classes = twMerge('inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition duration-200 ease-premium focus:outline-none focus:ring-4 focus:ring-apex-cyan/20 disabled:cursor-not-allowed disabled:opacity-50', variants[variant], className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
