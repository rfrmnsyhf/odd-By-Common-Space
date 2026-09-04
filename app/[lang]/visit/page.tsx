import type { Metadata } from 'next';
import { locales, type Locale, config } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonAnchor } from '@/components/ui/Button';

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
    title: isId ? 'Kunjungi' : 'Visit',
    description: isId
      ? 'Alamat, jam buka, dan arah ke odd by Common Space di Greenland, Batam.'
      : 'Address, opening hours, and directions to odd by Common Space in Greenland, Batam.',
    alternates: {
      canonical: `/${lang}/visit`,
      languages: { en: '/en/visit', id: '/id/visit' },
    },
  };
}

export default function VisitPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dict = getDict(lang);

  return (
    <>
      <section className="bg-offwhite pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <SectionLabel>{dict.visit.eyebrow}</SectionLabel>
          <FadeIn className="mt-8 max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              {dict.visit.headline}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-charcoal text-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <FadeIn className="md:col-span-5 space-y-8">
              <div>
                <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60 mb-3">
                  odd by Common Space
                </p>
                <p className="font-display text-xl md:text-2xl leading-relaxed">
                  {config.address.street}
                  <br />
                  {config.address.locality}
                  <br />
                  {config.address.region} {config.address.postalCode}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60 mb-3">
                  {dict.visit.hours}
                </p>
                <p className="font-display text-2xl md:text-3xl">
                  {dict.visit.hoursValue}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonAnchor href={config.googleMapsUrl} variant="primary">
                  {dict.visit.cta}
                </ButtonAnchor>
                <ButtonAnchor
                  href={config.googleMapsUrl}
                  variant="secondary"
                  className="!text-offwhite !border-offwhite/40 hover:!bg-offwhite hover:!text-charcoal"
                >
                  {dict.visit.openInMaps}
                </ButtonAnchor>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.1}
              className="md:col-span-7 relative aspect-[4/3] md:aspect-[5/4] overflow-hidden border border-offwhite/10"
            >
              <iframe
                title="odd by Common Space on Google Maps"
                src={config.googleMapsEmbed}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(0.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
