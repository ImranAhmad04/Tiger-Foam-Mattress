import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg border transition-colors cursor-pointer ${
        isDark
          ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-850 hover:text-amber-300'
          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-200 rotate-0 scale-100 text-slate-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
