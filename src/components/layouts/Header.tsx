import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiBell } from 'react-icons/fi';

const Header: React.FC = () => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Hope Foundation
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Donation Dashboard
                        </p>
                    </div>
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <button 
                        className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-700 transition-colors"
                        aria-label="Notifications"
                    >
                        <FiBell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full"></span>
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label={isDark? 'Switch to light mode' : 'Switch to dark mode'} 
                        aria-pressed={isDark}
                    >
                        {isDark? (
                            <FiSun className="w-5 h-5" />
                        ) : (
                            <FiMoon className="w-5 h-5" />
                        )}
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">AD</span>
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;