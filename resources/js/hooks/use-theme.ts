import { useState, useEffect } from 'react';

export const themes = [
  'default',
  'tangerine',
  'cosmic-night',
  'neo-brutalism',
  'ocean-breeze',
] as const;

export type Theme = (typeof themes)[number];

function setThemeInBrowser(value?: Theme | null) {
  if (typeof window === 'undefined') {
    return;
  }

  document.documentElement.dataset.theme = value || 'default';
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') {
    return;
  }

  const maxAge = days * 24 * 60 * 60;

  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
}

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem('theme') as Theme | null;
}

export function initializeTheme() {
  if (typeof window === 'undefined') {
    return;
  }

  // Initialize theme from saved preference...
  const savedAppearance = getStoredTheme();
  setThemeInBrowser(savedAppearance);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  function updateTheme(value: Theme) {
    setTheme(value);

    // Store in localStorage for client-side persistence...
    localStorage.setItem('theme', value);

    // Store in cookie for SSR...
    setCookie('theme', value);

    setThemeInBrowser(value);
  }

  return {
    theme,
    updateTheme,
  };
}
