'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

type Props = { lang: Locale };

export function StickyNav({ lang }: Props) {
  const dict = getDict(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on hash navigation
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  const links = [
    { href: `/${lang}/menu`, label: dict.nav.menu },
    { href: `/${lang}/space`, label: dict.nav.space },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/visit`, label: dict.nav.visit },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-offwhite/95 backdrop-blur-sm border-b border-charcoal/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="font-mono text-[11px] tracking-ultra-wide uppercase font-semibold"
            aria-label="odd by Common Space home"
          >
            <span className="hidden sm:inline">ODD BY COMMON SPACE</span>
            <span className="sm:hidden">ODD</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/80 hover:text-deepred transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang + cta */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle lang={lang} />
            <Link
              href={`/${lang}/visit`}
              className="font-mono text-[10px] tracking-ultra-wide uppercase bg-deepred text-offwhite px-4 py-2 hover:bg-darkred transition-colors"
            >
              {dict.nav.directions}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden font-mono text-[10px] tracking-ultra-wide uppercase"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open ? (
        <div className="md:hidden border-t border-charcoal/10 bg-offwhite">
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block font-mono text-[12px] tracking-ultra-wide uppercase"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-charcoal/10">
              <LanguageToggle lang={lang} />
              <Link
                href={`/${lang}/visit`}
                className="font-mono text-[10px] tracking-ultra-wide uppercase bg-deepred text-offwhite px-4 py-2"
              >
                {dict.nav.directions}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
