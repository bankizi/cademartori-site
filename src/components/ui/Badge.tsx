import { ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

interface BadgeProps {
  variant?: 'default' | 'large';
  className?: string;
}

export function Badge({ variant = 'default', className }: BadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 font-medium',
        variant === 'default' &&
          'rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-xs text-green-700',
        variant === 'large' &&
          'rounded-xl bg-brand-blue-lighter border border-brand-blue-light px-5 py-3 text-sm text-brand-blue',
        className
      )}
    >
      <ShieldCheck
        className={clsx(
          variant === 'default' ? 'h-3.5 w-3.5' : 'h-5 w-5'
        )}
      />
      Em processo de autorização pelo Banco Central do Brasil
    </div>
  );
}
