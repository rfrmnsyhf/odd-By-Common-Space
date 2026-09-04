import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { config } from '@/lib/config';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonAnchor } from '@/components/ui/Button';

type Props = { lang: Locale };

export function Location({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section id="visit" className="bg-charcoal text-offwhite py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <SectionLabel className="text-offwhite/60">{dict.visit.eyebrow}</SectionLabel>

        <FadeIn className="mt-8 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {dict.visit.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <FadeIn className="md:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60 mb-3">
                odd by Common Space
              </p>
              <p className="font-display text-xl leading-relaxed">
                {dict.visit.address}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/60 mb-3">
                {dict.visit.hours}
              </p>
              <p className="font-display text-2xl">{dict.visit.hoursValue}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonAnchor
                href={config.googleMapsUrl}
                variant="primary"
              >
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
  );
}
