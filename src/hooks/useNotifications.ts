import { useContext } from 'react'; 
import { NotificationContextType, NotificationContext } from '../contexts/NotificationContext';

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};