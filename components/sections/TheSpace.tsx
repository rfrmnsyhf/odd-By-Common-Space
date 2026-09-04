import Image from 'next/image';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { spacePhotos } from '@/lib/photos';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';

type Props = { lang: Locale };

export function TheSpace({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section id="space" className="bg-offwhite py-24 md:py-36 border-t border-charcoal/10">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <SectionLabel>{dict.space.eyebrow}</SectionLabel>
        <FadeIn className="mt-8 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {dict.space.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <p className="text-charcoal/80 text-base md:text-lg">
            {dict.space.body}
          </p>
        </FadeIn>

        {/* Zones — three columns */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-charcoal/15 pt-12">
          {dict.space.zones.map((z, i) => (
            <FadeIn key={z.title} delay={i * 0.06}>
              <h3 className="font-mono text-[12px] tracking-ultra-wide uppercase font-semibold">
                {z.title}
              </h3>
              <p className="mt-3 text-charcoal/70 text-sm leading-relaxed max-w-xs">
                {z.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <p className="mt-12 font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/60">
          {dict.space.chooseSubhead}
        </p>

        {/* Photo grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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
  );
}
