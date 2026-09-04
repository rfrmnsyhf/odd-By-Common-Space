// Lightweight i18n middleware.
// - Root `/` → `/en`
// - Non-locale paths → `/en` prefix
// - Explicit `/id` → kept
// Locale-prefixed paths pass through to Next.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['en', 'id'] as const;
const DEFAULT_LOCALE = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next internals, static files, API.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon') ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasLocale) return NextResponse.next();

  // Bare path → redirect to default locale.
  const target = pathname === '/' ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(new URL(target, req.url));
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
