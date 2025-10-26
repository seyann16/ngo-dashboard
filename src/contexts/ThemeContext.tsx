import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Theme, ThemeContextType } from '../types/index';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // BUG FIX: Improved them initialization with proper system detection
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem('ngo-dashboard-theme') as Theme;
        if (savedTheme) {
            return savedTheme;
        }

        // BUG FIX: Proper system preference detection
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark ? 'dark' : 'light';
    })

    // BUG FIX: Enhanced theme application with immediate update
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove both classes first to ensure clean state
        root.classList.remove('light', 'dark');

        // Add current theme class
        root.classList.add(theme);

        // BUG FIX: Also set data-theme attribute for better CSS targeting
        root.setAttribute('data-theme', theme);

        // Persist to localStorage
        localStorage.setItem('ngo-dashboard-theme', theme);

        // BUG FIX: Force repaint to ensure theme is applied
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
    }, [theme]);

    // BUG FIX: Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            // Only update if user hasn't explicitly set a preference
            const savedTheme = localStorage.getItem('ngo-dashboard-theme');
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        // Modern event listener
        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    });

    const toggleTheme = () => {
        setTheme((prev: Theme) => prev === 'light' ? 'dark' : 'light');
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};