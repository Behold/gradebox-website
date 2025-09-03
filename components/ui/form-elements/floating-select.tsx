import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface FloatingSelectProps {
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}

export const FloatingSelect = forwardRef<HTMLButtonElement, FloatingSelectProps>(
  ({ label, value, onValueChange, placeholder = "Choose one", children, error, className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (selectedValue: string) => {
      onValueChange?.(selectedValue);
      setIsOpen(false);
    };

    return (
      <div className="relative">
        <button
          type="button"
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full bg-[#F8F6EE] border-0 pt-5 pb-2 px-2.5 text-base font-medium focus:outline-none rounded-md transition-all duration-200 min-h-[48px] font-silka",
            "text-left flex items-center justify-between",
            "hover:bg-[#F8F6EE]/80",
            error && "ring-2 ring-red-500",
            className
          )}
        >
          <span className={cn(
            "text-base font-silka",
            value ? "text-gray-700" : "text-transparent"
          )}>
            {value || " "}
          </span>
          <ChevronDown className={cn(
            "w-3.5 h-3.5 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </button>
        
        {/* Floating Label */}
        <label 
          className={cn(
            "absolute left-2.5 text-xs font-medium text-[#44423F] transition-all duration-200 pointer-events-none font-silka",
            // When no value is selected, label is larger and centered
            !value ? "text-base top-2.5 text-[#44423F]" : "text-xs top-1.5 text-[#44423F]"
          )}
        >
          {label}
        </label>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <div className="py-1 max-h-60 overflow-auto">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === 'option') {
                  const optionChild = child as React.ReactElement<{ value: string; children: React.ReactNode }>;
                  return (
                    <button
                      type="button"
                      key={optionChild.props.value}
                      onClick={() => handleSelect(optionChild.props.value)}
                      className="w-full px-2.5 py-1.5 text-left text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 font-silka"
                    >
                      {optionChild.props.children}
                    </button>
                  );
                }
                return child;
              })}
            </div>
          </div>
        )}
        
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FloatingSelect.displayName = 'FloatingSelect';
