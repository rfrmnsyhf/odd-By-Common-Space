import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonLink } from '@/components/ui/Button';

export const runtime = 'edge';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const lang = params.lang;
  const isId = lang === 'id';
  return {
    title: isId ? 'Tentang' : 'About',
    description: isId
      ? 'odd by Common Space — specialty coffee, makanan kontemporer, dan ruang yang dibuat untuk orang.'
      : 'odd by Common Space — specialty coffee, contemporary food, and a space made for people.',
    alternates: {
      canonical: `/${lang}/about`,
      languages: { en: '/en/about', id: '/id/about' },
    },
  };
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dict = getDict(lang);

  return (
    <>
      <section className="bg-offwhite pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <SectionLabel>{dict.about.eyebrow}</SectionLabel>
          <FadeIn className="mt-8 max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              {dict.about.headline}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-deepred text-offwhite py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60">
            {lang === 'id' ? 'KAMI' : 'WE ARE'}
          </p>
          <FadeIn>
            <p className="mt-8 font-display italic text-2xl md:text-4xl leading-snug">
              {dict.about.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-t border-charcoal/15 pt-12">
            {dict.about.pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06} className="flex gap-6">
                <span className="font-mono text-[10px] tracking-ultra-wide text-charcoal/40 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-mono text-[12px] tracking-ultra-wide uppercase font-semibold">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-charcoal/70 text-sm leading-relaxed max-w-md">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mutedblue/30 py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10 text-center">
          <FadeIn>
            <p className="font-display text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
              {lang === 'id'
                ? 'Temukan meja yang sesuai untuk kunjunganmu.'
                : 'Find a table that fits your visit.'}
            </p>
          </FadeIn>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <ButtonLink href={`/${lang}/space`} variant="primary">
              {dict.nav.space}
            </ButtonLink>
            <ButtonLink href={`/${lang}/visit`} variant="secondary">
              {dict.visit.cta}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
