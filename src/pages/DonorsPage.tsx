import React from 'react';
import Card from '../components/ui/Card';
import { FiUsers, FiUserPlus, FiStar, FiMail } from 'react-icons/fi';

const DonorsPage: React.FC = () => {
  const donorStats = [
    { label: 'Total Donors', value: '2,847', icon: FiUsers },
    { label: 'New This Month', value: '245', icon: FiUserPlus },
    { label: 'Recurring Donors', value: '892', icon: FiStar },
    { label: 'Avg. Donation', value: '$245', icon: FiMail },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Donors</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage and communicate with your donors
        </p>
      </div>

      {/* Donor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donorStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Donor Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Donors
          </h2>
          <div className="text-center py-12">
            <FiStar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Top donors list coming soon
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Donor Communication
          </h2>
          <div className="text-center py-12">
            <FiMail className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Communication tools coming soon
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DonorsPage;