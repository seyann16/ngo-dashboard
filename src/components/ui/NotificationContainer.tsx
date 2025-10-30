import React from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import { FiCheck, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <FiCheck className="w-5 h-5 text-success-500" />;
      case 'error':
        return <FiAlertCircle className="w-5 h-5 text-error-500" />;
      case 'warning':
        return <FiCheck className="w-5 h-5 text-warning-500" />;
      case 'info':
        return <FiInfo className="w-5 h-5 text-primary-500" />;
      default:
        return <FiInfo className="w-5 h-5 text-primary-500" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-success-50 border-success-200 dark:bg-success-900/20 dark:border-success-800';
      case 'error':
        return 'bg-error-50 border-error-200 dark:bg-error-900/20 dark:border-error-800';
      case 'warning':
        return 'bg-warning-50 border-warning-200 dark:bg-warning-900/20 dark:border-warning-800';
      case 'info':
        return 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800';
      default:
        return 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div 
      className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full"
      role="status"
      aria-live="polite"
      aria-label="Notifications"
    >
      {notifications.map((notification) => (
        <div 
          key={notification.id}
          className={`p-4 rounded-lg border shadow-lg transition-all duration-300 animate-slide-up ${getBackgroundColor(notification.type)}`}
          role="alert"
        >
          <div className="flex items-start space-x-3">
            <div className="shrink-0">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {notification.title}
              </h4>
              {notification.message && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {notification.message}
                </p>
              )}
            </div>
            <button 
              onClick={() => removeNotification(notification.id)}
              className="shrink-0 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Dismiss notification"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;