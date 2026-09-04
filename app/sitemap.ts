import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oddbycommonspace.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'id'] as const;
  const routes = ['', '/menu', '/space', '/about', '/visit'];
  const out: MetadataRoute.Sitemap = [];
  for (const loc of locales) {
    for (const r of routes) {
      out.push({
        url: `${SITE_URL}/${loc}${r}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: r === '' ? 1.0 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((alt) => [alt, `${SITE_URL}/${alt}${r}`])
          ),
        },
      });
    }
  }
  return out;
}
