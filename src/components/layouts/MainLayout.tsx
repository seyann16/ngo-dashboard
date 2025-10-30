import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { FiMenu, FiX } from "react-icons/fi";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // BUG FIX: Manage sidebar state properly with localStorage persistence
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebar-open');
    return saved ? JSON.parse(saved) : window.innerWidth >= 1024; // Default open on desktop
  });

  // BUG FIX: Track active navigation item
  const [activeNavItem, setActiveNavItem] = useState('dashboard');

  // BUG FIX: Persist sidebar state
  useEffect(() => {
    localStorage.setItem('sidebar-open', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // BUG FIX: Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false); // Auto close on mobile
      } else {
        setSidebarOpen(true); // Auto-open on desktop
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []); // empty dependency array → run only on mount/unmount

  // BUG FIX: Handle navigation item clicks
  const handleNavItemClick = (itemId: string) => {
    setActiveNavItem(itemId);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // BUG FIX: Handle overlay click to close sidebar
  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* BUG FIX: Mobile overlay when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* BUG FIX: Sidebar with proper positionining and transitions */}
      <div 
        className={`fixed lg:relative z-50 h-full transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg-translate-x-0'}
        `}
      >
        <Sidebar 
          isOpen={sidebarOpen}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 lg:hidden"
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          aria-expanded={sidebarOpen}
          aria-controls="sidebar-navigation"
        >
          {sidebarOpen? <FiX className="w-5 h-5"/> : <FiMenu className="w-5 h-5" />}
        </button>

        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
