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
}

const SideBar: React.FC<SideBarProps> = ({ isOpen = true }) => {
  const menuItems = [
    { icon: FiHome, label: "Dashboard", active: true },
    { icon: FiBarChart2, label: "Analytics", active: false },
    { icon: FiUsers, label: "Donors", active: true },
    { icon: FiDollarSign, label: "Campaigns", active: false },
    { icon: FiCalendar, label: "Events", active: false },
    { icon: FiSettings, label: "Settings", active: false },
  ];

  return (
    <aside
      className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-200 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  className={`w-full flex items-center px-3 py-3 roudned-lg transition-colors
                    ${
                        item.active
                        ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-r-2 border-primary-600"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  aria-label={item.active ? "page" : undefined}
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
        <div className="mt-8 mx-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <h3 className="text-sm font-medium text-primary-900 dark:text-primary-100 mb-2">
            Current Goal
          </h3>
          <div className="w-full bg-primary-200 dark:bg-primary-800 rounded-full h-2">
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
