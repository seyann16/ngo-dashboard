import React from "react";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { FiTarget, FiUsers, FiCalendar } from "react-icons/fi";
import { Campaign } from "../../types/index";

interface CampaignProgressProps {
  campaigns: Campaign[];
  loading?: boolean;
}

const CampaignProgress: React.FC<CampaignProgressProps> = ({
  campaigns,
  loading = false,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getDaysRemaining = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "success";
    if (percentage >= 70) return "primary";
    if (percentage >= 50) return "warning";
    return "error";
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Campaign Progress
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Track your active fundraising campaigns
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Active Campaigns
          </p>
          <p className="text-2xl font-bold text-primary-600">
            {campaigns.length}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {campaigns.map((campaign) => {
          const progressPercentage =
            (campaign.currentAmount / campaign.goal) * 100;
          const daysRemaining = getDaysRemaining(campaign.endDate);
          const isEndingSoon = daysRemaining <= 30 && daysRemaining > 0;
          const isOverdue = daysRemaining < 0;

          return (
            <div
              key={campaign.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {campaign.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {campaign.description}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <FiUsers className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>{campaign.donors} donors</span>
                  </div>
                  <div
                    className={`flex items-center ${
                      isOverdue
                        ? "text-error-600"
                        : isEndingSoon
                        ? "text-warning-600"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <FiCalendar className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>
                      {isOverdue
                        ? "Ended"
                        : isEndingSoon
                        ? `${daysRemaining}d left`
                        : `${daysRemaining}d left`}
                    </span>
                  </div>
                </div>
              </div>

              <ProgressBar
                value={campaign.currentAmount}
                max={campaign.goal}
                color={getProgressColor(progressPercentage)}
                height="lg"
                showPercentage={true}
                label={`${formatCurrency(
                  campaign.currentAmount
                )} of ${formatCurrency(campaign.goal)}`}
              />

              <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <FiTarget className="w-4 h-4 mr-1" aria-label="true" />
                  {campaign.category}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === "active"
                      ? "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400"
                      : campaign.status === "completed"
                      ? "bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                  }`}
                >
                  {campaign.status.charAt(0).toUpperCase() +
                    campaign.status.slice(1)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {campaigns.length === 0 && (
        <div className="text-center py-8">
          <FiTarget
            className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            No active campaigns
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Create a new campaign to start fundraising
          </p>
        </div>
      )}
    </Card>
  );
};

export default CampaignProgress;
