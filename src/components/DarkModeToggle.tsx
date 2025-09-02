'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn backdrop-blur"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="text-yellow-500 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="text-gray-800 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
