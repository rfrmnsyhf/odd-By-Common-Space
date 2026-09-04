import Image from 'next/image';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { featuredFood, formatIDR } from '@/lib/menu';
import { foodPhoto } from '@/lib/photos';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonLink } from '@/components/ui/Button';

type Props = { lang: Locale };

export function Food({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section id="food" className="bg-softpink/30 py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <SectionLabel>{dict.food.eyebrow}</SectionLabel>
        <FadeIn className="mt-8 max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {dict.food.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-6 max-w-2xl">
          <p className="text-charcoal/80 text-base md:text-lg">
            {dict.food.body}
          </p>
        </FadeIn>

        {/* Category strip */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-y border-charcoal/15 py-4">
          {dict.food.categories.map((c) => (
            <span
              key={c}
              className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/70"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Featured list */}
          <FadeIn className="md:col-span-7 order-2 md:order-1">
            <ul className="divide-y divide-charcoal/15">
              {featuredFood.map((f) => (
                <li
                  key={f.name}
                  className="py-5 flex items-baseline justify-between gap-4"
                >
                  <div>
                    <p className="font-display text-2xl md:text-3xl">{f.name}</p>
                    {f.desc ? (
                      <p className="mt-1 text-charcoal/60 text-xs font-mono uppercase tracking-wide max-w-md">
                        {f.desc}
                      </p>
                    ) : null}
                  </div>
                  <span className="font-mono text-[10px] tracking-ultra-wide text-charcoal/70 shrink-0">
                    {formatIDR(f.price)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href={`/${lang}/menu`} variant="primary">
                {dict.food.cta}
              </ButtonLink>
            </div>
          </FadeIn>

          {/* Food photo right */}
          <FadeIn
            delay={0.1}
            className="md:col-span-5 order-1 md:order-2 relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={foodPhoto.src}
              alt={foodPhoto.alt}
              fill
              sizes="(min-width: 768px) 38vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
