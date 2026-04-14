import { clsx } from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  narrow?: boolean;
}

export function Container({
  children,
  as: Component = 'div',
  className,
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-5xl' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </Component>
  );
}
