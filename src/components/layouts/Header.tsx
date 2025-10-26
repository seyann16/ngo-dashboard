import React from "react";
import { useTheme } from "../../contexts/useTheme";
import { FiSun, FiMoon, FiBell } from "react-icons/fi";

const Header: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  // BUG FIX: Enhanced keyboard event handlers
  const handleThemeKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTheme();
    }
  };

  const handleNotificationKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      // TODO: Implement notification panel
      console.log("Open notifications");
    }
  };

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
          {/* Notifications - BUG FIX: Added proper keyboard support */}
          <button
            className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            aria-label="Notifications (3 unread)"
            onClick={() => console.log("Open notifications")}
            onKeyDown={handleNotificationKeyDown}
            tabIndex={0}
          >
            <FiBell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full"></span>
          </button>

          {/* Theme Toggle - BUG FIX: Enhanced keyboard accessibility */}
          <button
            onClick={toggleTheme}
            onKeyDown={handleThemeKeyDown}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            tabIndex={0}
          >
            {isDark ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              aria-label="User profile menu"
              onClick={() => console.log("Open user menu")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  console.log("Open user menu");
                }
              }}
              tabIndex={0}
            >
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AD</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Administrator
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
