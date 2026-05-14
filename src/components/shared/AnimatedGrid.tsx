'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
export function AnimatedGrid({ children, className = '' }: { children: ReactNode; className?: string }) { return <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: .06 } } }} className={className}>{children}</motion.div>; }
export function AnimatedItem({ children, className = '' }: { children: ReactNode; className?: string }) { return <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: .45, ease: [.22, 1, .36, 1] } } }} className={className}>{children}</motion.div>; }
