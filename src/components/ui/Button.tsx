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
    primary: 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30',
    secondary: 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/30',
    outline: 'border-2 border-blue-600/50 text-blue-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10',
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
