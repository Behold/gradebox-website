import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            "peer w-full bg-[#F8F6EE] border-0 pt-5 pb-2 px-2.5 text-base font-medium focus:outline-none rounded-md transition-all duration-200 resize-none font-silka",
            "placeholder-transparent", // Hide placeholder since we have floating label
            "min-h-[96px]",
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

FloatingTextarea.displayName = 'FloatingTextarea';
