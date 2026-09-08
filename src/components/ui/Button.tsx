import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  as?: 'a' | 'button';
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  href,
  as = 'button',
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-accent-electric text-bg-deep hover:opacity-90 shadow-lg shadow-accent-electric/20',
    secondary: 'bg-accent-deep text-white hover:opacity-90 shadow-lg shadow-accent-deep/20',
    outline: 'border-2 border-accent-electric/50 text-accent-electric hover:border-accent-electric hover:bg-accent-electric hover:text-bg-deep',
    ghost: 'text-text-muted hover:text-text-primary hover:bg-bg-surface/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const commonClasses = cn(
    'rounded-xl font-medium transition-all duration-300 active:scale-95 hover:scale-105 inline-flex items-center justify-center',
    variants[variant],
    sizes[size],
    className
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        className={commonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={commonClasses}
      {...props}
    />
  );
};
