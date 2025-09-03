'use client';

import { useId, useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Label } from '@/components/ui/form-elements';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
  const id = useId();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';
  const checked = isDark;

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        transformStyle: 'flat',
      }}
    >
      <SunIcon
        size={16}
        className={!isDark ? 'text-foreground' : 'text-muted-foreground'}
      />
      <Switch id={id} checked={checked} onCheckedChange={handleToggle} />
      <MoonIcon
        size={16}
        className={isDark ? 'text-foreground' : 'text-muted-foreground'}
      />
      <Label htmlFor={id} className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}
