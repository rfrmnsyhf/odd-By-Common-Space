type Props = {
  items: string[];
  separator?: string;
  className?: string;
};

/**
 * Static-tape marquee. Two duplicate tracks translate -50%.
 * Disabled when prefers-reduced-motion.
 */
export function Marquee({ items, separator = '·', className = '' }: Props) {
  const tape = items.map((it, i) => (
    <span key={i} className="flex items-center gap-6">
      <span className="font-display text-3xl md:text-5xl">{it}</span>
      <span className="text-deepred text-2xl md:text-4xl">{separator}</span>
    </span>
  ));

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden
    >
      <div className="inline-flex animate-marquee">
        <div className="inline-flex shrink-0 items-center gap-6 pr-6">
          {tape}
        </div>
        <div className="inline-flex shrink-0 items-center gap-6 pr-6">
          {tape}
        </div>
      </div>
    </div>
  );
}
