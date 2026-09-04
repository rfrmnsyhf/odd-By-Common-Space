import type { ReactNode } from 'react';

type Props = {
  number?: string;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionLabel({ number, children, align = 'left', className = '' }: Props) {
  return (
    <div
      className={`label-line ${align === 'center' ? 'justify-center' : ''} ${className}`}
    >
      {number ? <span>{number}</span> : null}
      <span>{children}</span>
    </div>
  );
}
