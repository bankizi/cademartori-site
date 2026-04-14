'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { FGC_WARNING } from '@/lib/constants';

export function FGCAlertBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0, 1] }}
      className="bg-brand-blue text-white"
      role="alert"
      aria-label="Aviso importante sobre o Fundo Garantidor de Créditos"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 text-sm leading-relaxed">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
          <p className="font-medium">
            {FGC_WARNING}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
