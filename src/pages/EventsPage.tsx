import React from 'react';
import Card from '../components/ui/Card';
import { FiCalendar, FiMapPin, FiUsers, FiDollarSign } from 'react-icons/fi';

const EventsPage: React.FC = () => {
  const eventStats = [
    { label: 'Upcoming Events', value: '8', icon: FiCalendar },
    { label: 'Event Locations', value: '5', icon: FiMapPin },
    { label: 'Expected Attendees', value: '1.2K', icon: FiUsers },
    { label: 'Event Revenue', value: '$45K', icon: FiDollarSign },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Plan and track your fundraising events
        </p>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventStats.map((stat, index) => {
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

      {/* Event Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Event Calendar
          </h2>
          <div className="text-center py-12">
            <FiCalendar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Event calendar view coming soon
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Event Planning
          </h2>
          <div className="text-center py-12">
            <FiMapPin className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Event planning tools coming soon
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EventsPage;