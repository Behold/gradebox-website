import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            "peer w-full bg-[#F8F6EE] border-0 pt-5 pb-2 px-2.5 text-base font-medium focus:outline-none rounded-md transition-all duration-200 min-h-[48px] font-silka",
            "placeholder-transparent", // Hide placeholder since we have floating label
            error && "ring-2 ring-red-500",
            className
          )}
          placeholder=" " // Empty placeholder for peer selector to work
          ref={ref}
          {...props}
        />
        <label 
          htmlFor={props.id}
          className={cn(
            "absolute left-2.5 text-xs font-medium text-[#44423F] transition-all duration-200 pointer-events-none font-silka",
            "peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-[#44423F]",
            "peer-focus:text-xs peer-focus:top-1.5 peer-focus:text-[#44423F]",
            "peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[#44423F]"
          )}
        >
          {label}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = 'FloatingInput';
