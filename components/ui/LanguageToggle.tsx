'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';

type Props = { lang: Locale };

/**
 * Replaces the current path's locale segment.
 * e.g. /en/menu on ID toggle → /id/menu
 */
function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${target}`;
  if (segments[0] === 'en' || segments[0] === 'id') {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return '/' + segments.join('/');
}

export function LanguageToggle({ lang }: Props) {
  const dict = getDict(lang);
  const pathname = usePathname();
  const target: Locale = lang === 'en' ? 'id' : 'en';
  const href = swapLocaleInPath(pathname, target);
  const label = dict.lang.switchTo;

  return (
    <Link
      href={href}
      aria-label={label}
      className="font-mono text-[10px] tracking-ultra-wide uppercase border border-charcoal/20 rounded-full px-3 py-1.5 hover:bg-charcoal hover:text-offwhite transition-colors"
    >
      <span className={lang === 'en' ? 'font-semibold' : 'opacity-50'}>
        {dict.lang.en}
      </span>
      <span className="mx-1.5 opacity-30">/</span>
      <span className={lang === 'id' ? 'font-semibold' : 'opacity-50'}>
        {dict.lang.id}
      </span>
    </Link>
  );
}
