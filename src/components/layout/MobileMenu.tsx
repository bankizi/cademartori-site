'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.25, 0.4, 0, 1] as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3, ease: [0.25, 0.4, 0, 1] as const },
  }),
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white shadow-2xl"
            aria-label="Menu de navegação mobile"
          >
            <div className="flex items-center justify-between border-b border-border-light p-4">
              <span className="text-lg font-bold text-brand-blue">Menu</span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-text-secondary hover:bg-brand-offwhite transition-colors"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-text-primary hover:bg-brand-blue-lighter hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-3 pt-6 border-t border-border-light">
                <Button href="#" variant="primary" size="lg" className="w-full">
                  Enviar documentação
                </Button>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
