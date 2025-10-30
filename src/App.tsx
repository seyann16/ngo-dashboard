import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './components/layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import DonorsPage from './pages/DonorsPage';
import CampaignsPage from './pages/CampaignsPage';
import EventsPage from './pages/EventsPage';
import SettingsPage from './pages/SettingsPage';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <ErrorBoundary>
          <MainLayout>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/donors" element={<DonorsPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              {/* Fallback route */}
              <Route path="*" element={<DashboardPage />} />
            </Routes>
          </MainLayout>
        </ErrorBoundary>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;