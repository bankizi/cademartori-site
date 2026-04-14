import { clsx } from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            'mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]',
            dark ? 'text-brand-gold' : 'text-brand-gold-dark'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          'text-2xl font-bold leading-tight md:text-3xl lg:text-4xl',
          dark ? 'text-white' : 'text-brand-blue'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-base leading-relaxed md:text-lg',
            align === 'center' && 'mx-auto max-w-2xl',
            dark ? 'text-brand-blue-light' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
