import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-offwhite min-h-[100svh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-mono text-[10px] tracking-ultra-wide uppercase text-charcoal/60">
          404 · NOT FOUND
        </p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
          A LITTLE LOST.
        </h1>
        <p className="mt-4 text-charcoal/70 text-base">
          The page you are looking for is not here. Maybe it never was.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <ButtonLink href="/en" variant="primary">
            BACK TO HOME
          </ButtonLink>
          <Link
            href="/en/menu"
            className="font-mono text-[10px] tracking-ultra-wide uppercase border border-charcoal/30 px-6 py-3 hover:bg-charcoal hover:text-offwhite transition-colors"
          >
            VIEW MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
