import React from "react";
import StatsCard from "./StatsCard";
import { FiDollarSign, FiUsers, FiTarget, FiAward, FiRefreshCw } from "react-icons/fi";
import { useDashboardData } from "../../hooks/useDashboardData";
import { useNotifications } from "../../hooks/useNotifications";
import RecentDonations from './RecentDonations';
import CampaignProgress from "./CampaignProgress";
import DonationChart from "../charts/DonationChart";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBoundary from "../ui/ErrorBoundary";
import ExportButton from "./ExportButton";

const Dashboard: React.FC = () => {
  const { data, loading, error, refreshData } = useDashboardData();
  const { addNotification } = useNotifications();

  const handleRefresh = async () => {
    await refreshData();
    addNotification({
      type: 'success',
      title: 'Dashboard Updated',
      message: 'Your dashboard has been refreshed successfully.',
    });
  };

  // Format stats for stats cards
  const stats = data ? [
    {
      title: "Total Raised",
      value: `$${data.stats.totalRaised.toLocaleString()}`,
      icon: FiDollarSign,
      trend: data.stats.monthlyGrowth,
      description: `Monthly goal: $${data.stats.monthlyGoal.toLocaleString()}`,
      color: "success" as const,
    },
    {
      title: "Total Donors",
      value: data.stats.totalDonors.toLocaleString(),
      icon: FiUsers,
      trend: 8.2,
      description: `${Math.round(data.stats.totalDonors / 1000)}k+ supporters`,
      color: "primary" as const,
    },
    {
      title: "Active Campaigns",
      value: data.stats.activeCampaigns.toString(),
      icon: FiTarget,
      trend: 2,
      description: `${data.campaigns.filter(c => c.status === 'active').length} active now`,
      color: "warning" as const,
    },
    {
      title: "Avg Donation",
      value: `$${data.stats.averageDonation}`,
      icon: FiAward,
      trend: 3.1,
      description: "Per donation average",
      color: "success" as const,
    },
  ] : [];

  if (error) {
    return (
      <div className="space-y-6">
        <div className="card p-6 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Failed to load Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {error}
            </p>
            <button
              onClick={handleRefresh} 
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:otuline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
            >
              <FiRefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
              Retry Loading Data
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="card p-6 animate-pulse"
            >
              <div className="flex justify-between">
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center py-12">
          <LoadingSpinner size="lg" text="Loading dashboard data..." />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header - BUG FIX: Improved responsive typography */}
        <div className="px-2 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your campaigns today.
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <ExportButton data={data} />
          <button 
            onClick={handleRefresh}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-label="Refresh dashboard data"
          >
            <FiRefreshCw  className="w-4 h-4" aria-hidden="true" />
          </button>
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

        {/* Charts and Data Section */}
        <div className="flex flex-col gap-4">
          {/* Donation Trends Chart - Takes 2/3 on large screens */}
          <div className="">
            <DonationChart />
          </div>

          {/* Campaign Progress - Takes 1/3 on large screens */}
          <div className="">
            <CampaignProgress campaigns={data.campaigns} />
          </div>
        </div>

        {/* Recent Donations - Full width */}
        <div>
          <RecentDonations donations={data.recentDonations} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
