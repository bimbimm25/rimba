import React from 'react';
import { cn } from '@/lib/utils';

export const Card = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'bg-white rounded-3xl border border-rimba-100/80 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200',
            className
        )}
        {...props}
    >
        {children}
    </div>
);