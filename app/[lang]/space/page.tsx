import type { Metadata } from 'next';
import Image from 'next/image';
import { locales, type Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { spacePhotos } from '@/lib/photos';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonLink } from '@/components/ui/Button';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === 'id';
  return {
    title: isId ? 'Ruang' : 'Space',
    description: isId
      ? 'Dua lantai, indoor dan outdoor. Temukan ruang yang sesuai untuk kunjunganmu.'
      : 'Two floors, indoor and outdoor. Find the space that fits your visit.',
    alternates: {
      canonical: `/${lang}/space`,
      languages: { en: '/en/space', id: '/id/space' },
    },
  };
}

export default async function SpacePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDict(lang);

  return (
    <>
      <section className="bg-offwhite pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <SectionLabel>{dict.space.eyebrow}</SectionLabel>
          <FadeIn className="mt-8 max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              {dict.space.headline}
            </h1>
          </FadeIn>
          <p className="mt-6 max-w-2xl text-charcoal/70 text-base md:text-lg">
            {dict.space.body}
          </p>
        </div>
      </section>

      <section className="bg-softpink/20 py-20 md:py-28 border-y border-charcoal/10">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-charcoal/15 pt-10">
            {dict.space.zones.map((z, i) => (
              <FadeIn key={z.title} delay={i * 0.06}>
                <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 font-mono text-[14px] tracking-ultra-wide uppercase font-semibold">
                  {z.title}
                </h2>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed max-w-xs">
                  {z.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <SectionLabel>{lang === 'id' ? 'GALERI' : 'GALLERY'}</SectionLabel>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {spacePhotos.map((p, i) => (
              <FadeIn
                key={p.src}
                delay={i * 0.06}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10 text-center">
          <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60">
            {dict.space.chooseSubhead}
          </p>
          <FadeIn className="mt-6">
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
              {lang === 'id'
                ? 'Mau ngopi sebentar, meeting santai, atau kerja berjam-jam? Pilih ruang yang sesuai.'
                : 'Need a quick coffee, a casual meeting, or a few hours with your laptop? Choose the space that fits.'}
            </h2>
          </FadeIn>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <ButtonLink href={`/${lang}/menu`} variant="primary">
              {dict.hero.ctaMenu}
            </ButtonLink>
            <ButtonLink href={`/${lang}/visit`} variant="secondary" className="!text-offwhite !border-offwhite/40 hover:!bg-offwhite hover:!text-charcoal">
              {dict.visit.cta}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
