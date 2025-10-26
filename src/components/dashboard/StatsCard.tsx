import React from "react";
import { IconType } from "react-icons";
import Card from "../ui/Card";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  trend?: number;
  description?: string;
  color?: "primary" | "success" | "warning" | "error";
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  description,
  color = "primary",
}) => {
  // BUG FIX: Added keyboard support for interactive stats cards
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // TODO: Implement drill-down functionality
      console.log(`Navigate to ${title} details`);
    }
  };

  const colorClasses = {
    primary:
      "text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400",
    success:
      "text-success-600 bg-success-50 dark:bg-success-900/20 dark:text-success-400",
    warning:
      "text-warning-600 bg-warning-50 dark:bg-warning-900/20 dark:text-warning-400",
    error:
      "text-error-600 bg-error-50 dark:bg-warning-900/20 dark:text-warning-400",
  };

  const isPositiveTrend = trend && trend >= 0;

  return (
    <Card hover 
      className="p-4 sm:p-6 cursor-pointer transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
      onClick={() => console.log(`Navigate to ${title} details`)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${title}: ${value}. ${trend !== undefined ? `${isPositiveTrend ? 'Increased' : 'Decreased'} by ${Math.abs(trend)}% from last month.` : ''} ${description || ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0"> {/* BUG FIX: Added min-w-0 for text truncation */}
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>

          {trend !== undefined && (
            <div className="flex items-center space-x-1">
              {isPositiveTrend ? (
                <FiTrendingUp className="w-4 h-4 text-success-500" />
              ) : (
                <FiTrendingDown className="w-4 h-4 text-error-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositiveTrend
                    ? "text-success-600 dark:text-success-400"
                    : "text-error-600 dark:text-error-400"
                }`}
              >
                {isPositiveTrend ? "+" : ""}
                {trend}%
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                from last month
              </span>
            </div>
          )}

          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
        </div>

        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
