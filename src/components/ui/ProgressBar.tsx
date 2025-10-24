import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  color?: "primary" | "success" | "warning" | "error";
  height?: "sm" | "md" | "lg";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  showPercentage = true,
  color = "primary",
  height = "md",
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heightClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  const colorClasses = {
    primary: "bg-primary-500",
    success: "bg-success-500",
    warning: "bg-warning-500",
    error: "bg-error-500",
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {percentage.toFixed(1)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${heightClasses[height]}`}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`${colorClasses[color]} transition-all duration-500 ease-out rounded-full h-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Additional info for screen readers */}
      <div className="sr-only">
        Progress: {percentage.toFixed(1)}% complete. {value} out of {max}.
      </div>
    </div>
  );
};

export default ProgressBar;
