import Link from 'next/link';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { config } from '@/lib/config';
import { Marquee } from '@/components/ui/Marquee';

type Props = { lang: Locale };

export function Footer({ lang }: Props) {
  const dict = getDict(lang);
  const links = [
    { href: `/${lang}/menu`, label: dict.nav.menu },
    { href: `/${lang}/space`, label: dict.nav.space },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/visit`, label: dict.nav.visit },
  ];

  const marqueeItems = [
    'ODD',
    'BY COMMON SPACE',
    'COFFEE',
    'FOOD',
    'SPACE',
    'GREENLAND',
    'BATAM',
  ];

  return (
    <footer className="bg-offwhite border-t border-charcoal/10">
      {/* Top marquee strip */}
      <div className="border-b border-charcoal/10 py-6">
        <Marquee items={marqueeItems} />
      </div>

      <div className="mx-auto max-w-8xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] tracking-ultra-wide uppercase font-semibold">
              ODD
            </p>
            <p className="font-mono text-[11px] tracking-ultra-wide uppercase font-semibold mt-1">
              BY COMMON SPACE
            </p>
            <p className="mt-4 text-charcoal/70 text-sm font-display italic">
              {dict.footer.tagline}
            </p>
            <p className="mt-6 text-charcoal/60 text-xs font-mono uppercase tracking-wide">
              {dict.footer.location}
            </p>
          </div>

          {/* Address / hours */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50 mb-2">
                {dict.footer.addressLabel}
              </p>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                {config.address.street}
                <br />
                {config.address.locality}
                <br />
                {config.address.region} {config.address.postalCode}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50 mb-2">
                {dict.footer.hoursLabel}
              </p>
              <p className="text-charcoal/80 text-sm font-display">
                {config.hours.open} — {config.hours.close}
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50">
              {dict.footer.connect}
            </p>
            {config.social.instagram ? (
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-deepred transition-colors"
              >
                Instagram
              </a>
            ) : null}
            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-deepred transition-colors"
            >
              Google Maps
            </a>
            {config.social.linktree ? (
              <a
                href={config.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-deepred transition-colors"
              >
                Linktree
              </a>
            ) : null}
          </div>

          {/* Explore */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50">
              {dict.footer.explore}
            </p>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm hover:text-deepred transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50">
            {dict.footer.rights}
          </p>
          <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50">
            GREENLAND · BATAM · ID
          </p>
        </div>
      </div>
    </footer>
  );
}
