import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
  children: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-[10px] tracking-ultra-wide uppercase transition-colors duration-200';

const variants: Record<Variant, string> = {
  primary:
    'bg-deepred text-offwhite hover:bg-darkred border border-deepred hover:border-darkred',
  secondary:
    'bg-transparent text-charcoal border border-charcoal/30 hover:bg-charcoal hover:text-offwhite',
  ghost:
    'bg-transparent text-charcoal border-0 underline-offset-4 hover:underline',
};

export function ButtonLink({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonAnchor({ variant = 'primary', className = '', children, ...rest }: AnchorProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
