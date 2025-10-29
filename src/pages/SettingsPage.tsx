import React from 'react';
import Card from '../components/ui/Card';
import { FiSettings, FiUser, FiBell, FiShield } from 'react-icons/fi';

const SettingsPage: React.FC = () => {
  const settingsSections = [
    { label: 'Profile Settings', description: 'Update your personal information', icon: FiUser },
    { label: 'Notification Preferences', description: 'Manage your notification settings', icon: FiBell },
    { label: 'Security', description: 'Password and security settings', icon: FiShield },
    { label: 'Organization', description: 'Organization details and settings', icon: FiSettings },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account and application settings
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer" >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {section.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {section.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Additional Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Advanced Settings
        </h2>
        <div className="text-center py-8">
          <FiSettings className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Advanced configuration options coming soon
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;