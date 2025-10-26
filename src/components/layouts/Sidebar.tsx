import React from "react";
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiCalendar,
} from "react-icons/fi";

interface SideBarProps {
  isOpen?: boolean;
  activeItem?: string;
  onItemClick?: (itemName: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ 
  isOpen = true,
  activeItem = 'Dashboard',
  onItemClick 
}) => {
  // BUG FIX: Added proper menu items with click handlers and keyboard support
  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'analytics', icon: FiBarChart2, label: 'Analytics' },
    { id: 'donors', icon: FiUsers, label: 'Donors' },
    { id: 'campaigns', icon: FiDollarSign, label: 'Campaigns' },
    { id: 'events', icon: FiCalendar, label: 'Events' },
    { id: 'settings', icon: FiSettings, label: 'Settings' },
  ];

  // BUG FIX: Handle keyboard events for accessibility
  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onItemClick?.(itemId);
    }
  }

  return (
    <aside
      className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-200 flex flex-col rounded-b-xl ${
        isOpen ? "w-64 h-132" : "w-20"
      }`}
      aria-label="Main navigation"
    >
      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={index}>
                <button
                  role="menuitem"
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center px-3 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800
                    ${isActive ? 'bg-primary-50 dark:bg-primary-900/2 text-prumary-600 dark:text-primary-400 border-r-2 border-primary-600'
                      : 'text-gray-600 dark:tet-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                  onClick={() => onItemClick?.(item.id)}
                  onKeyDown={(e) => {handleKeyDown(e, item.id)}}
                  tabIndex={0} // BUG FIX: Ensure button is focusable
                >
                  <Icon className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
                  {isOpen && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Current Campaign Progress */}
      {isOpen && (
        <div 
          className="mt-8 mx-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
          aria-label="Current campaign progress"
        >
          <h3 className="text-sm font-medium text-primary-900 dark:text-primary-100 mb-2">
            Current Goal
          </h3>
          <div 
            className="w-full bg-primary-200 dark:bg-primary-800 rounded-full h-2"
            role="progressbar"
            aria-valuenow={65}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="65% of $50,000 goal reached"
          >
            <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                style={{ width: '65%' }}
            ></div>
          </div>
          <p className="text-xs text-primary-700 dark:text-primary-300 mt-2">
            $32,500 of $50,000
          </p>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
