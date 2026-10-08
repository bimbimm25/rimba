import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

        const variants = {
            primary: 'bg-rimba-500 text-white hover:bg-rimba-600 shadow-sm shadow-rimba-500/20',
            secondary: 'bg-leaf-light text-rimba-700 hover:bg-rimba-100',
            outline: 'border-2 border-rimba-500 text-rimba-600 hover:bg-rimba-50',
            accent: 'bg-accent-sun text-white hover:bg-amber-600 shadow-sm shadow-accent-sun/20'
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm gap-1.5 min-h-[40px]',
            md: 'px-6 py-3 text-base gap-2 min-h-[48px]',
            lg: 'px-8 py-4 text-lg font-semibold gap-2.5 min-h-[56px]'
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';