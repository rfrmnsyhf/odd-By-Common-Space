import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { menu, formatIDR } from '@/lib/menu';
import { menuJsonLd } from '@/lib/seo';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';

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
    title: isId ? 'Menu' : 'Menu',
    description: isId
      ? 'Menu lengkap odd by Common Space — specialty coffee, comfort food kontemporer, dan lebih banyak lagi.'
      : 'Full menu at odd by Common Space — specialty coffee, contemporary comfort food, and more.',
    alternates: {
      canonical: `/${lang}/menu`,
      languages: { en: '/en/menu', id: '/id/menu' },
    },
  };
}

export default function MenuPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dict = getDict(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd(lang)) }}
      />
      <section className="bg-offwhite pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <SectionLabel>{dict.menuPage.title}</SectionLabel>
          <FadeIn className="mt-8 max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              {lang === 'id' ? 'Menu' : 'The Menu'}
            </h1>
          </FadeIn>
          <p className="mt-6 max-w-xl text-charcoal/70 text-sm md:text-base">
            {dict.menuPage.intro}
          </p>
        </div>
      </section>

      <section className="bg-offwhite pb-32">
        <div className="mx-auto max-w-8xl px-6 md:px-10 space-y-20">
          {menu.map((cat, ci) => (
            <FadeIn key={cat.id} delay={Math.min(ci * 0.04, 0.2)} id={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-charcoal/15 pt-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/50 mb-2">
                    {String(ci + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-mono text-[14px] tracking-ultra-wide uppercase font-semibold">
                    {dict.categories[cat.key]}
                  </h2>
                </div>
                <ul className="md:col-span-9 divide-y divide-charcoal/10">
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="py-4 flex items-baseline justify-between gap-6"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-lg md:text-xl">{it.name}</p>
                        {it.desc ? (
                          <p className="mt-1 text-charcoal/60 text-xs font-mono uppercase tracking-wide max-w-xl">
                            {it.desc}
                          </p>
                        ) : null}
                      </div>
                      <span className="font-mono text-[10px] tracking-ultra-wide text-charcoal/70 shrink-0">
                        {formatIDR(it.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
