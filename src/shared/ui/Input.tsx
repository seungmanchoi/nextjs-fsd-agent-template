'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        ) : null}
        <input
          ref={ref}
          className={`h-10 rounded-lg border border-gray-300 bg-white px-3 text-base transition-colors placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
