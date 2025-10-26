import { useContext } from 'react';
import type { Theme, ThemeContextType } from '../types/index';
import { ThemeContext } from './ThemeContext';

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};