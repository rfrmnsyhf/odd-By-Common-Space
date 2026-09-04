import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';

type Props = { lang: Locale };

export function BrandStatement({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section className="bg-offwhite py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <SectionLabel>{dict.brand.eyebrow}</SectionLabel>

        <FadeIn className="mt-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            {dict.brand.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-charcoal/15 pt-12">
          {dict.brand.pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08} className="flex flex-col">
              <span className="font-mono text-[10px] tracking-ultra-wide text-charcoal/50">
                {p.index}
              </span>
              <h3 className="mt-3 font-mono text-[12px] tracking-ultra-wide uppercase font-semibold">
                {p.title}
              </h3>
              <p className="mt-3 text-charcoal/70 text-sm leading-relaxed max-w-xs">
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
