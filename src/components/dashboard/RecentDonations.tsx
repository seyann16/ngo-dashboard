import React, { useState, useMemo } from "react";
import { Donation } from "../../types";
import Card from "../ui/Card";
import { FiArrowUp, FiArrowDown, FiFilter } from "react-icons/fi";

interface RecentDonationsProps {
  donations: Donation[];
  loading?: boolean;
}

type SortField = "date" | "amount" | "donorName";
type SortDirection = "asc" | "desc";

const RecentDonations: React.FC<RecentDonationsProps> = ({
  donations,
  loading = false,
}) => {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Memoized sorted and filtered donations
  const processedDonations = useMemo(() => {
    let filtered = donations;

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (donation) => donation.status === statusFilter
      );
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === "date") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      } else if (sortField === "amount") {
        aValue = aValue;
        bValue = bValue;
      } else if (sortField === "donorName") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [donations, sortField, sortDirection, statusFilter]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status: Donation["status"]) => {
    const statusConfig = {
      completed: {
        color:
          "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400",
        label: "Completed",
      },
      pending: {
        color:
          "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400",
        label: "Pending",
      },
      failed: {
        color:
          "bg-error-100 text-error-800 dark:bg-error-900/20 dark:text-error-400",
        label: "Failed",
      },
    };

    const config = statusConfig[status];
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const SortButton: React.FC<{
    field: SortField;
    children: React.ReactNode;
  }> = ({ field, children }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center space-x-1 text-left font-medium text-gray-900 dark:text-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
      aria-label={`Sort by ${field} ${
        sortField === field
          ? sortDirection === "asc"
            ? "ascending"
            : "descending"
          : ""
      }`}
    >
      <span>{children}</span>
      {sortField === field &&
        (sortDirection === "asc" ? (
          <FiArrowUp className="w-4 h-4" aria-hidden="true" />
        ) : (
          <FiArrowDown className="w-4 h-4" aria-hidden="true" />
        ))}
    </button>
  );

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Donations
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500">
            Latest donor contributions and their status
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <div className="flex items-center space-x-2">
            <FiFilter className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-prumary-500"
              aria-label="Filter by donation status"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full" aria-label="Recent donations table">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 text-left">
                <SortButton field="amount">Amount</SortButton>
              </th>
              <th className="pb-3 text-left">Campaign</th>
              <th className="pb-3 text-left">
                <SortButton field="date">Date</SortButton>
              </th>
              <th className="pb-3 text-left">Status</th>
              <th className="pb-3 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {processedDonations.slice(0, 8).map((donation) => (
              <tr
                key={donation.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-3 text-sm text-gray-900 dark:text-white">
                  {donation.donorName}
                </td>
                <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(donation.amount, donation.currency)}
                </td>
                <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                  {donation.campaignId}
                </td>
                <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(donation.date)}
                </td>
                <td className="py-3">{getStatusBadge(donation.status)}</td>
                <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                  {donation.paymentMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {processedDonations.slice(0, 5).map((donation) => (
          <div
            key={donation.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {donation.donorName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatCurrency(donation.amount, donation.currency)}
                </p>
                {getStatusBadge(donation.status)}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{formatDate(donation.date)}</span>
              <span>{donation.paymentMethod}</span>
            </div>
          </div>
        ))}
      </div>

      {processedDonations.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No donations found matching your filters.
          </p>
        </div>
      )}
    </Card>
  );
};

export default RecentDonations;
