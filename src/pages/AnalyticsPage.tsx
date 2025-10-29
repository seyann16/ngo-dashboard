import React from 'react';
import Card from '../components/ui/Card';
import { FiBarChart2, FiTrendingUp, FiUsers, FiDollarSign} from 'react-icons/fi';

const AnalyticsPage: React.FC = () => {
  const analyticsStats = [
    { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: FiTrendingUp },
    { label: 'Avg. Session Duration', value: '4m 12s', change: '+23%', icon: FiBarChart2 },
    { label: 'New Donors', value: '124', change: '+18%', icon: FiUsers },
    { label: 'Revenue per Visitor', value: '$2.45', change: '+$0.32', icon: FiDollarSign },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Detailed insights and performance metrics
        </p>
      </div>

      {/* Analytics Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => {
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
                  <p className="text-sm text-success-600">
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Coming Soon Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white-mb-4">
            Traffic Sources
          </h2>
          <div className="text-center py-12">
            <FiBarChart2 className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Traffic analytics coming soon
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Donor Demographics
          </h2>
          <div className="text-center py-12">
            <FiUsers className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 darkLtext-gray-400">
              Demographic data coming soon
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;