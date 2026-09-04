import { defaultLocale } from '@/lib/config';

// Bare root that survives middleware. Actual homepage is /[lang]/page.tsx.
// Middleware redirects / → /en, so this file should rarely render.
// Kept as a safety net for edge cases.
export default function RootFallback() {
  return null;
}

export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      id: '/id',
    },
  },
};
