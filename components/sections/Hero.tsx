import Image from 'next/image';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { heroPhoto } from '@/lib/photos';
import { ButtonLink, ButtonAnchor } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

type Props = { lang: Locale };

export function Hero({ lang }: Props) {
  const dict = getDict(lang);
  const lines = dict.hero.headline.split('\n');

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal text-offwhite">
      {/* Background photo */}
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />
      {/* Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-10 min-h-[100svh] flex flex-col">
        <div className="flex items-center justify-between pt-28 md:pt-32">
          <SectionLabel className="text-offwhite/70">{dict.hero.location}</SectionLabel>
        </div>

        <div className="mt-auto pb-16 md:pb-24">
          <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-offwhite/70 mb-6">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-4xl">
            {lines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-offwhite/80 font-display italic">
            {dict.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={`/${lang}/menu`} variant="primary">
              {dict.hero.ctaMenu}
            </ButtonLink>
            <ButtonAnchor
              href="https://www.google.com/maps/search/?api=1&query=odd+by+Common+Space+Greenland+Batam"
              variant="secondary"
              className="!text-offwhite !border-offwhite/50 hover:!bg-offwhite hover:!text-charcoal"
            >
              {dict.hero.ctaDirections}
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
