'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { clsx } from 'clsx';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-30 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border-light'
            : 'bg-white/70 backdrop-blur-md'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Cademartori Zamudio — Página inicial"
            >
              <Image
                src="/images/logo-azul.png"
                alt=""
                width={2715}
                height={642}
                preload
                className="h-7 w-auto max-w-none sm:h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      'animated-underline px-3 py-2 text-sm font-medium transition-colors rounded-md',
                      isActive
                        ? 'text-brand-blue'
                        : 'text-text-secondary hover:text-brand-blue'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* CTA — desktop */}
              <div className="hidden md:block">
                <Button href="#" variant="primary" size="sm">
                  Enviar documentação
                </Button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden rounded-lg p-2 text-text-secondary hover:bg-brand-offwhite transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
