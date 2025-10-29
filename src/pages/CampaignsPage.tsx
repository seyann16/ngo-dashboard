import React from 'react';
import Card from '../components/ui/Card';
import { FiTarget, FiPlus, FiTrendingUp, FiCalendar } from 'react-icons/fi';

const CampaignsPage: React.FC = () => {
  const campaignStats = [
    { label: 'Active Campaigns', value: '12', icon: FiTarget },
    { label: 'Total Raised', value: '$325K', icon: FiTrendingUp },
    { label: 'Completion Rate', value: '78%', icon: FiTarget },
    { label: 'Active Campaigns', value: '12', icon: FiTarget },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Campaigns</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Create and manage your fundraising campaigns
        </p>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols 1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaignStats.map((stat, index) => {
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

      {/* Campaign Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-whote mb-4">
            Create New Campaign
          </h2>
          <div className="text-center py-12">
            <FiPlus className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Campaign creation wizard coming soon
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Campaign Calendar
          </h2>
          <div className="text-center py-12">
            <FiCalendar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Campaign timeline coming soon
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CampaignsPage;