import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Theme, ThemeContextType } from '../types/index';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    // Initialize theme from system preference or localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('ngo-dashboard-theme') as Theme;
        const systemPrefersDark = window.matchMedia('(prefers-colors-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    // Apply theme to document
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        localStorage.setItem('ngo-dashboard-theme', theme);
    }, [theme]);

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

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};