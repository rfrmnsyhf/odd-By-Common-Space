import { defaultLocale } from '@/lib/config';

// Bare root that survives middleware. Actual homepage is /[lang]/page.tsx.
// Middleware redirects / → /en, so this file should rarely render.
// Kept as a safety net for edge cases.
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en');
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
