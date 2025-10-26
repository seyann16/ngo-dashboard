import React from "react";
import StatsCard from "./StatsCard";
import { FiDollarSign, FiUsers, FiTarget, FiAward } from "react-icons/fi";

const Dashboard: React.FC = () => {
  // Temporary static data
  const stats = [
    {
      title: "Total Raised",
      value: "$125,430",
      icon: FiDollarSign,
      trend: 12.5,
      description: "This month: $12,840",
      color: "success" as const,
    },
    {
      title: "Total Donors",
      value: "2,847",
      icon: FiUsers,
      trend: 8.2,
      description: "245 new this month",
      color: "primary" as const,
    },
    {
      title: "Active Campaigns",
      value: "12",
      icon: FiTarget,
      trend: 2,
      description: "3 campaigns ending soon",
      color: "warning" as const,
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: FiAward,
      trend: 3.1,
      description: "Campaign completion",
      color: "success" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header - BUG FIX: Improved responsive typography */}
      <div className="px-2 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here's what's happening with your campaigns today.
        </p>
      </div>

      {/* Stats Grid - BUG FIX: Enhanced responsive grid with better breakpoints */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg-grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
