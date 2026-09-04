import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonAnchor } from '@/components/ui/Button';
import { config } from '@/lib/config';

type Props = { lang: Locale };

export function Reviews({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section id="reviews" className="bg-mutedblue/40 py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <SectionLabel>{dict.reviews.eyebrow}</SectionLabel>

        <FadeIn className="mt-8 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {dict.reviews.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Rating block */}
          <FadeIn className="md:col-span-5">
            <div className="border-t border-charcoal/15 pt-8">
              <p className="font-display text-7xl md:text-8xl text-deepred leading-none">
                ★ {dict.reviews.rating}
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/70">
                {dict.reviews.count}
              </p>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.1} className="md:col-span-7">
            <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-charcoal">
              {dict.reviews.quote}
            </blockquote>
            <div className="mt-8">
              <ButtonAnchor
                href="https://www.google.com/maps/search/?api=1&query=odd+by+Common+Space+Greenland+Batam"
                variant="secondary"
              >
                {dict.reviews.cta}
              </ButtonAnchor>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
