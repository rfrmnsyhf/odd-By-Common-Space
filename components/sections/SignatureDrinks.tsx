import Image from 'next/image';
import type { Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { featuredDrinks, formatIDR } from '@/lib/menu';
import { signaturePhoto, drinkPhotos } from '@/lib/photos';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { ButtonLink } from '@/components/ui/Button';

type Props = { lang: Locale };

export function SignatureDrinks({ lang }: Props) {
  const dict = getDict(lang);

  return (
    <section
      id="signature"
      className="bg-charcoal text-offwhite py-24 md:py-36"
    >
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel className="text-offwhite/60">
              {dict.signature.eyebrow}
            </SectionLabel>
            <FadeIn className="mt-6">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
                {dict.signature.headline}
              </h2>
            </FadeIn>
            <p className="mt-4 max-w-md text-offwhite/70 text-sm">
              {dict.signature.body}
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Photo — editorial wide left */}
          <FadeIn className="md:col-span-7 relative aspect-[4/3] md:aspect-[5/4] overflow-hidden">
            <Image
              src={signaturePhoto.src}
              alt={signaturePhoto.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </FadeIn>

          {/* List right */}
          <FadeIn delay={0.1} className="md:col-span-5 flex flex-col justify-center">
            <ul className="divide-y divide-offwhite/15">
              {featuredDrinks.map((d) => (
                <li
                  key={d.name}
                  className="py-4 flex items-baseline justify-between gap-4"
                >
                  <div>
                    <p className="font-display text-xl md:text-2xl">{d.name}</p>
                    {d.desc ? (
                      <p className="mt-1 text-offwhite/60 text-xs font-mono uppercase tracking-wide max-w-xs">
                        {d.desc}
                      </p>
                    ) : null}
                  </div>
                  <span className="font-mono text-[10px] tracking-ultra-wide text-offwhite/70 shrink-0">
                    {formatIDR(d.price)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href={`/${lang}/menu`} variant="secondary" className="!text-offwhite !border-offwhite/40 hover:!bg-offwhite hover:!text-charcoal">
                {dict.food.cta}
              </ButtonLink>
            </div>
          </FadeIn>
        </div>

        {/* Small stacked drink images — editorial composition */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {drinkPhotos.map((p, i) => (
            <FadeIn
              key={p.src}
              delay={i * 0.05}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
