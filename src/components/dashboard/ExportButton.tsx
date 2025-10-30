import React, { useState } from 'react';
import { FiDownload, FiFile, FiCheck } from 'react-icons/fi';
import { DashboardData } from '../../types';

interface ExportButtonProps {
  data: DashboardData;
  className?: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, className = '' }) => {
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const exportToCSV = () => {
    setExporting(true);

    // Simulate export process
    setTimeout(() => {
      // Convert donations to CSV
      const donationsCSV = convertToCSV(data.recentDonations);
      // Create and download CSV file
      const blob = new Blob([donationsCSV], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `donations-export-${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setExporting(false);
      setExported(true);

      // Reset exported state after 3 seconds
      setTimeout(() => setExported(false), 3000);
    }, 1500);
  };

  const convertToCSV = (donations: any[]) => {
    const headers = ['Donor Name', 'Amount', 'Currency', 'Date', 'Campaign', 'Status', 'Payment Method'];
    const csvRows = [
      headers.join(','),
      ...donations.map(donation => [
        `"${donation.donorName}"`,
        donation.amount,
        donation.currency,
        donation.date,
        `"${donation.campaignId}"`,
        donation.status,
        donation.paymentMethod
      ].join(','))
    ];

    return csvRows.join('\n');
  };

  return (
    <button 
      onClick={exportToCSV}
      disabled={exporting || exported}
      className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${exporting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : exported ? 'bg-success-500 text-white hover:bg-success-600' : 'bg-primary-600 text-white hover:bg-primary-700'}
        ${className}
      `}
      aria-label={exported ? 'Export completed' : exporting ? 'Exporting data...' : 'Export data to CSV'}
    >
      {exporting ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Exporting...
        </>
      ) : exported ? (
        <>
          <FiCheck className="w-4 h-4 mr-2" aria-hidden="true" />
          Exported!
        </>
      ) : (
        <>
          <FiDownload className="w-4 h-4 mr-2" aria-hidden="true" />
          Download
        </>
      )}
    </button>
  );
};

export default ExportButton;