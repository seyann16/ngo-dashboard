import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../ui/Card";

// Mock data for donation trends
const donationData = [
  { month: "Jan", amount: 12500, donations: 45 },
  { month: "Feb", amount: 18900, donations: 52 },
  { month: "Mar", amount: 15600, donations: 48 },
  { month: "Apr", amount: 21800, donations: 67 },
  { month: "May", amount: 19400, donations: 58 },
  { month: "Jun", amount: 25400, donations: 72 },
  { month: "Jul", amount: 23100, donations: 65 },
  { month: "Aug", amount: 28700, donations: 81 },
  { month: "Sep", amount: 31200, donations: 89 },
  { month: "Oct", amount: 28400, donations: 76 },
  { month: "Nov", amount: 32500, donations: 94 },
  { month: "Dec", amount: 29800, donations: 85 },
];

const DonationChart: React.FC = () => {
  // Format tooltip values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-white">{label}</p>
          <p className="text-sm text-primary-600">
            Amount: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-sm text-success-600">
            Donations: {payload[1].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
            Donation Trends
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monthly donation amount and count
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Amount
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Donations
            </span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={donationData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            aria-label="Monthly donation trends chart"
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#009898" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#009898" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#198038" stopOpacity={0.8} />
                <stop offset="5%" stopColor="#198038" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5f7f7"
              className="dark:stroke-gray-700"
            />
            <XAxis
              dataKey="month"
              stroke="#007575"
              className="dark:stroke-gray-400 dark:fill-gray-400"
              tick={{ fill: "#007575" }}
            />
            <YAxis
              stroke="#007575"
              className="dark:stroke-gray-400 dark:fill-gray-400"
              tick={{ fill: "#007575" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#009898"
              fillOpacity={1}
              fill="url(#colorAmount)"
              name="Amount"
            />
            <Area
              type="monotone"
              dataKey="donations"
              stroke="#198038"
              fillOpacity={1}
              fill="url(#colorDonations)"
              name="Donations"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Total raised this year:{" "}
          <strong className="text-primary-600">
            {formatCurrency(
              donationData.reduce((sum, month) => sum + month.amount, 0)
            )}
          </strong>
        </p>
      </div>
    </Card>
  );
};

export default DonationChart;
