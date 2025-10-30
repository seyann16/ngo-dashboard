import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiBarChart2, 
  FiUsers, 
  FiDollarSign, 
  FiSettings,
  FiCalendar 
} from 'react-icons/fi';

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true }) => {
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', path: '/', icon: FiHome, label: 'Dashboard' },
    { id: 'analytics', path: '/analytics', icon: FiBarChart2, label: 'Analytics' },
    { id: 'donors', path: '/donors', icon: FiUsers, label: 'Donors' },
    { id: 'campaigns', path: '/campaigns', icon: FiDollarSign, label: 'Campaigns' },
    { id: 'events', path: '/events', icon: FiCalendar, label: 'Events' },
    { id: 'settings', path: '/settings', icon: FiSettings, label: 'Settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className={`
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transition-all duration-200 flex flex-col h-full rounded-b-xl
        ${isOpen ? 'w-64' : 'w-20'}
      `}
      aria-label="Main navigation"
    >
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2" role="menubar" aria-label="Main menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.id} role="none">
                <Link
                  to={item.path}
                  role="menuitem"
                  aria-label={item.label}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    w-full flex items-center px-3 py-3 rounded-lg transition-colors
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800
                    ${active 
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-r-2 border-primary-600' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                  tabIndex={0}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isOpen ? 'mr-3' : ''}`} />
                  {isOpen && (
                    <span className="font-medium truncate">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Current Campaign Progress */}
      {isOpen && (
        <div 
          className="mx-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg mb-4"
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

export default Sidebar;